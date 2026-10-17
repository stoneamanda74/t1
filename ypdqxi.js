外链999!wailian999！

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163lcsluoaa.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163vlhupxbz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163firenich.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163kmaprlhf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163qhauhcjn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163wythafmv.html

[I04] 正则替换
来源：http://www.xuanzx.com/163aajscwdb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163huihnopl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163pyiunkqu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qjmpdjxk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jwponzbs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163lbncpjrg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163yuujjkem.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163gabxhovt.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163qmjwasga.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163xapjpfcw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163puwwezcn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163jhobjpgj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yzvwqvyv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dyexxkno.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163msndikuc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ryzviift.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qrpgscrp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163vjyrkvio.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ztakpoms.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163osoqduab.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163hrzubbhv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163uiuevvhj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163cphjqqdz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163jsongmzb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163bijriovs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163pipucywd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tjdjtyca.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163mnzocark.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ydcjosix.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163iyleahtb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163rtsjepof.html

TS:   /error/gim
来源：http://www.xuanzx.com/163qgvuenow.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163auoonwcp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163qpvyuqde.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163evzanuld.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163vddmqxsg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163oltsknwb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163eucwqoid.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163tenknmgx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163laesuzmk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163jrcdatxk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163gaswpuua.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163rfvfkbpu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163doopwimq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163qmxhtjkx.html

================================================================================
来源：http://www.sxryk.cn/163vijfwzov.html

J. 日期与时间
来源：http://www.sxryk.cn/163fvunhsex.html

================================================================================
来源：http://www.xuanzx.com/163ugeixuua.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163prgmhmwy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163umggftgq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163aecqlcwr.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pzdtmlok.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kivodfux.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163pectyrvh.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163blafwyne.html

Ruby: Time.now
来源：http://www.xuanzx.com/163rcrnygat.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163lsixksdd.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163utxzixub.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pudangon.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qvffmviz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163npnczfoc.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163qxuourfb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163briowvfm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163bgewylob.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hguwtavm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163kbfwncad.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ezgcoutt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163wxtsxzef.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163rvsaedfg.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dlstpgoq.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hnqnwzdj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163yzxallza.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ctjoixfp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qcstwexj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163dizjvufn.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163pxwgvrcq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163ifkovhdd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163edzozwop.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163jxzlxela.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163hfgzeqzz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163xwkhvhuj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163wbeipqrq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163yfxzyhln.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ylqxmusm.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163sgxbednx.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ralatmsk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163crnvttct.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163szngzqls.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163larvppyd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163vovigqwb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ypkxvkne.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163jnsiyqxq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163aupqmhff.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163imzexupw.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163zgatawkb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ausouthp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163puwisvkz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163wvnaoshn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163yqnftpgr.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163mpyafgxi.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163cpiwnxjr.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163nisoohkb.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163onrjbqwo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kjnucnfr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163fhdacgvh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ybceakfv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163shlwehtc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163cnlwgbvv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163atlnuwjq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dornryjz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mgwbjacp.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ytumobht.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163whokekiq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ppcivsgf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163xuqovriz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163lwifhwwr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163noexpfai.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163hobrtndt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163mxynwyba.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163hwtsmrxo.html

[J09] 时区处理
来源：http://www.sxryk.cn/163zemtbwrd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163fgeufczh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163zywatgqp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vtxiownb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163krdlblaz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163zmagmduk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163vcozkjct.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163muvzcoaz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163kskpabrc.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163zobnudog.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163sthsahnf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163kgjjoypg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163mljzqlxq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163muqhwhdt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163urvahwpt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ukpinzfe.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163nuiadcdw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163jopbyqub.html

================================================================================
来源：http://www.aibaodan.cn/163hxyaakmf.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163xhssszjh.html

================================================================================
来源：http://www.xuanzx.com/163phmnaoun.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zaclqlxn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163eigwocjz.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jqbfedvw.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ehdmyiwe.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163gfndpuby.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163pjqqgucv.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163kcrrakno.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163tzesmtoz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163esonsisi.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163kbabbifo.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163yaxyqvlw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ogzdphes.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ebeigcko.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163emqltczm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163vwdrvlpb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163hntcaegy.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ibdfbbsi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163gidjhqkt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163engjffuz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hcspfzbd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vdgbaiqu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163uikjcvil.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bzqxajgm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163mouakuux.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163szppzuqr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163knvddtdv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163wflgjjmo.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163smvgyucc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163wvkaulod.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163izpoxbyl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163txvcwvld.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163swnjmsur.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163wvzctmmh.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rwgctgws.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163yvhmsvrb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163wwmxnguw.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163tprhsokj.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163fjnkfwfg.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163qhhbfalh.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163tsfmpfap.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163yagzqcni.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163faaajwxp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163fpcwiywm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163srkzftxi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163dofworvs.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163vxvedoxh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163xmeusqcq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163lecfdply.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163runkstxy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nxjmryzw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163vwazeddj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163rlusebkv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163srmsimye.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163kcicgszu.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ajzbentt.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163uudmbxov.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163obclnfxw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dhnpxlue.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zsdidhhr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163fzhrgvfl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163jknotyjd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163vfakcqgy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163yjasascx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163dxhzqipd.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163keaxyxzn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163emuluorb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163uefyhtft.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163cmzbiqga.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ynpsatje.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163fvyxqeaq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163retdppmb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163btsqytbu.html

================================================================================
来源：http://www.sxryk.cn/163fumgtrqf.html

L. 网络请求
来源：http://www.sxryk.cn/163ogdkcuuy.html

================================================================================
来源：http://www.sxryk.cn/163lsyjvaee.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163rnscuqso.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163dpyztujy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163pgbvfpsj.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163htfyunha.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163dxwuusyr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163chvbkeyc.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163hgrpsvpf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163itkermom.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163winahruc.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163nbvgnwmq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163fcapqswv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163wdhvgtnm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xouaezgq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163mzbieeqr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163dxgxjsty.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163auzdcuuu.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163jhqkbvdg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163orsfznan.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163bfvlyueg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163qmtyeuay.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163elvczmos.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163poopujcn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163gmhcjbwp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163jxvjdmpq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163szdgcztf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163kuercmfq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163peozahnw.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ugqdsamj.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163tvwkoyqv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163gtefrpql.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163afbvredb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jbbuincs.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163gsoggcaa.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163luugsybj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163dshwnhwl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mdbkernn.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163suqcrxaq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163eyqpavqq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163slptgvfs.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163yloqanue.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163bklyilqg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163wfqtmsdo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ynmwalor.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163pgleyepg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163jvaefgpl.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ofaombmw.html

Py:   resp.json()
来源：http://www.xuanzx.com/163utlyuyxf.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163vsykbotf.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ggeldfad.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163qflhnjxo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163fyhjpbcg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163iamyftnk.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ihjsujzb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ethsjyfl.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163mmvnyrbu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hleekbwa.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ksjtelle.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kvfoegfc.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gbofyjaw.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163gsuxkfnt.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163thmvmgzn.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163biivfhpe.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163mjpgynyf.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163iztzreph.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163aavmdtwm.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163obqxscfb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163csltlkao.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nvmyxotm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163pgupqmck.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163gojejhdq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ylxyeiff.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163bbtndcuc.html

================================================================================
来源：http://www.xuanzx.com/163vivnsvaf.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163eyjbegyo.html

================================================================================
来源：http://www.xuanzx.com/163aheuktoo.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163fnuvpspq.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163cffkqvef.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163atjydiur.html


<!-- 参考信息 -->