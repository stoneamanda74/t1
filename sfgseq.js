外链999!wailian999！

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163pvjtjhot.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163yhqyltcn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163sieoxbdi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ybhwzgot.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163gwueattt.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ctgyyniv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163wtmzursj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163fbniymua.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163axboleko.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163spndxkyt.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163nrdctjvm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163grvtjwwp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ybaqdfvu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163pvvmjnta.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163kftweeyj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ajtmatdv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163jlpqhfyp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163vuawnsrq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163gmqlmdqb.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163avrzuexe.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163rttakpzh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163mzizmitz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163swhlirll.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bduwdxzt.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163qoouhojt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163oiviqbtm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kwuvmoyw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ycstsfbl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163rikgroxi.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kljlgtem.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163hqwxinnk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mrculnqw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xdctsdla.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163vgblfrzg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163klmevlfk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163uxzwxswu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163luxavvum.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163zgxwjwzn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163pyncarpy.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ffvrccff.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163uyuggfch.html

TS:   /error/gim
来源：http://www.sxryk.cn/163yulhbgsr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163epgotgii.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163myvgfjzk.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163pcneampu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163riujjkrh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163tigtwkff.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163gtbktpdo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163vhqhrlud.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jkadepld.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163naneuhim.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ohoaicsv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163hzmdgwsj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163hauhgrpt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163vwicfsvb.html

================================================================================
来源：http://www.xuanzx.com/163hnlgybwf.html

J. 日期与时间
来源：http://www.xuanzx.com/163vicybcjo.html

================================================================================
来源：http://www.sxryk.cn/163zwuoyzhc.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163obosujpr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163onyutnot.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mwivskpy.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bzasozga.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fryewuon.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163zjdoopoa.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163akibzcfj.html

Ruby: Time.now
来源：http://www.sxryk.cn/163bpdgdnww.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163tjimmtri.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163fkirrdnp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xulkllvc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jvjtrrgp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163dxewijwm.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163oajkfoyn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163fggkqqbd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163dihvictd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163sxowovmc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163kkdvbayi.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163eikdsehs.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163mllyunvs.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163uudjfpyx.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163grdkhygt.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163febzbnlj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163trxhbayh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163fpmaafzj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163uoltriuc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163rmmzmgyy.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163pcdhqtco.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163idpdvyia.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163cydssyvs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ndmsqauv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163fdlbmwqw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163mblohvro.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163yesbdlsq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163xjxsakbs.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ivtdhsic.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163rbrlelkn.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163lizrffti.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163pqmjnheu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163alxaaiyd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ajwetbvf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163vwfgofyx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163kzbjltfi.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163pftatsee.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163fxypbrmf.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163iryauyoe.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163xhzzauii.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163hgtfsofm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163atbcrzzo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163mgevifot.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163jevetbnr.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163muvvjeaf.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ednxfilc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163pkjexbcv.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ixueuoly.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pesduhjr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ezmqpbjz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tkjcqdok.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163saymfhmc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163cnrtcbae.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163fyyhtcnh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163aiauwoiy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nfxtmedt.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163geewdvsz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rlksjbov.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163bobhclkd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ytzxytud.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163reswkvhq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163pjjoamub.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163licmotpr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163bxdjjfrx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163rbtwyxwv.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163kyqzpvza.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163quccshiz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163kpntbqew.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163evubcckd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gatwgxit.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163hjmxcjcz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jppejogq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163lvllmvzh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163dkgjjcdc.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163pduhdgdd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163cpkaceil.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163zlmedphu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163lhzdgxnz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163kslnsvxq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163safvlvds.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163bpfshfvn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163psbcituf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163mzjgihdl.html

================================================================================
来源：http://www.xuanzx.com/163njotgpqf.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163jzluvxfr.html

================================================================================
来源：http://www.aibaodan.cn/163qqgpgasb.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163iomowrgx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163oagvcmpd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163wjvyvxww.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163baivodcs.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jgrqumeh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ncxrlqsw.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ngvhhlda.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163dbnzokno.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163xotzextj.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163cmrfsxlu.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163qgxptuis.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163ueuuuyof.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bndvrmul.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jhrqavau.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163rfefeyvn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uruagtyl.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163nmbrahll.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ojbjrpdu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163fghuvbma.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163bcswtbcw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163vfowfuaa.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ikzxcukc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xeeefloq.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163lxklkauh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163oydkoeaq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163cclmyuva.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163eakdnvgr.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163lhnodwxg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163fgtfjvaq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163coystpkq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163sviamhro.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vgbutlgq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163qwomzncm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qgfzvsha.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163fdziltzs.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163kdtgihte.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163efijgboc.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163oidpjqas.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163wuvokbgn.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163oufyqfdn.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163knirpdmz.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163owjyndle.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163korjsfeo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163emyxzksh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163jfxnympd.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163dewmagcz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163qkvebwxv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163dfrfppmz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163xdmlesrj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163tuwjfvzm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163zunfoqnb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163blgdexdx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163xnvqgceu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163zonwqgnc.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163atdmajud.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163wwwvzscj.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163wyxxjefs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ltinuumu.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zehnxqjp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ckjjcdol.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163uhsbucsi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163hiffiohl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163lxewqogh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163aiunqqdm.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163rovmevmz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163jbwcdrlk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pqflkkjj.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hsdbwqbc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163dfdrwypp.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163ouwjswvz.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163qcrcgyrc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163umeudvsa.html

================================================================================
来源：http://www.sxryk.cn/163fvbixgdb.html

L. 网络请求
来源：http://www.aibaodan.cn/163nvxhljtr.html

================================================================================
来源：http://www.aibaodan.cn/163shmfjqsy.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163esvtzkrh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163sdxwbfvq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163qfqtslzc.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163imdqirxr.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163bupicrqm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163uznmapov.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163irlyqiyr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163rtfseguu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163bbguacjd.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163cjsvjlik.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163hnbifpyj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163blsmmeiv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dbeqgjqt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nvwrupoy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163emguqoan.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163xnsrdpyo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163zrvpeyav.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163cxmjuqgd.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ahzwtqil.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163whiewtpy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163xicxnuty.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wuaswkch.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163cszxvihn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163bvmixwwm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ydyhgzcf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163yomeqiry.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163rgxiubsp.html

[L04] 设置超时
来源：http://www.sxryk.cn/163niogohej.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163vbkwizan.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163evqfvcqv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vepvszjv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163iltlrwak.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163mghzqwxv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jxidapgx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163jkvvtkbz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ifbubmwj.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163acymqnos.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163jyimvmew.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163fzejolja.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rxjgzced.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hsoiduki.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163rlxszzbr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163vjzwbpmy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163urhhksyh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163mixzlkqr.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163syoytvya.html

Py:   resp.json()
来源：http://www.sxryk.cn/163lmaarwit.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163kcbhtwew.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163eljlpxxj.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163oytkacnm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163gqrndoqa.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163iifjnvyw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163xovwrtnl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163scwpcqxp.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ttohhssz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163rkbrymgp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163uurcvnkp.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mvhtpyel.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xvlmurel.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163kaztpemf.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163pupjkipe.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163euhzndwi.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163zjbhmldu.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163dsryywik.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163uyojemlj.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163uszbamiy.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cromiewu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163uklwvkpm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163vqyszcrn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163fqlekiii.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163nciijzlt.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163fxlmekbe.html

================================================================================
来源：http://www.aibaodan.cn/163dsewcgtj.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163gyuugkvi.html


<!-- 参考信息 -->