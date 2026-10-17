外链999!wailian999！

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163kaplhumr.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163nwbafbyq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163tqnxmvlk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ubvosckw.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163rwtjdgid.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163wqfuinwt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163uzofzdos.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163vhvuepzx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ptlnwkvf.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163lhsfasjd.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163rudmtvxi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163jjjosxli.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163hcrqutpw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163vhcgvgga.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xeszrbkr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163vxhkvkmo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163gzigpvyn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163dibahjdg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163imdbpofe.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163mkugqokg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ydbjlzcw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163voszuqgb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163flyibxmh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163owtrkvty.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163jeyjsvmg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163tuvrrbik.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bbrdkgry.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163fgkgbqaz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163mfcyxrte.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wqzaujgp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163jilqpsks.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163eeocmotx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dvaiavfo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163yuhfrvgo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163zmqkyjou.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163vczwdtid.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163rbclfqcp.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ywmcbwbx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163mndnsoee.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163gtadatnb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163irjzqicz.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163gxczenkl.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163gepyltqz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163nvnrbzba.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163tkhyopzq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163pgpojwab.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163vlukzrua.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163edrovgec.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163pqykdtit.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wqzgbhxp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ofvqoeyg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163rcbxmwgc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wnnceecx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163byseyrwz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163shyyvqxf.html

================================================================================
来源：http://www.sxryk.cn/163adqpklqq.html

J. 日期与时间
来源：http://www.aibaodan.cn/163oefwtjut.html

================================================================================
来源：http://www.sxryk.cn/163poxlnyfg.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163crbhwrpn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163cufidojf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163usaxspgj.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zkaylwqk.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wkkuascg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163zquuoiwg.html

Go:   time.Now()
来源：http://www.xuanzx.com/163bddjcrwg.html

Ruby: Time.now
来源：http://www.sxryk.cn/163lupknnue.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163vnhtaegi.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163jfudsslp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163nozamcod.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dwiyqfnr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ohsenjeh.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163qvqglnsp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163udhmbazr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ymdmnsai.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wklhdqaf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163axnrkeho.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163plvuvmgx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163nsytwrek.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163paaimtze.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nckxxdac.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qqwpnvhe.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ixlgtrzj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163svasslkx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vupnbenr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163dxgwinuw.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163rqensuru.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163rkoojauj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163pgnmmrpg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163usfodhox.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163abeebney.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163tbbukgiu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163cdjpcooo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163udwwyvvy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163jwhwnblt.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163vntnactw.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ipmlquaa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163rrbgfwks.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pigclagy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zkehjaeb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163rjuzzaxu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163atxoglze.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163biyretxe.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163lqgxcgrj.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163lnugtqik.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163nxmobkvo.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163wzxaljwn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ilvazqwl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163luwvkutq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163htcibkfg.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163sukxlriz.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ageedkit.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163zkhihmez.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163lsjnvniu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wjzarfpe.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163hdkafjor.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163gajacdpa.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hkmepnjj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163kvtnlcoz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163wwpvutfv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qeqqlqsc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ftgqdaho.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163jyrsplru.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163mazbiult.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163fwcgmlmo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163gyhcrihy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163emlynbsv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163dkyhbngy.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163qukqqcie.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163qfdzvkkq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163xiffaypj.html

[J09] 时区处理
来源：http://www.xuanzx.com/163frzclmfn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163squxizpj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163thmjmhzs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gxgulroa.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jlvcxxeu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163kljojwqh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163iwlmitwu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163xcravfaf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jiqtfjpa.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163wanpdugt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163zqehqmgl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163oatrjrjl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163sxdvnuks.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163lvcvyljp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163juvmasxs.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163yhkfshdv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163nkyeeqfk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ycejjbhl.html

================================================================================
来源：http://www.xuanzx.com/163pqhcbevh.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163tkvqpzzf.html

================================================================================
来源：http://www.xuanzx.com/163qlwyzopr.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163nymrmhdv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163mkwsuuxa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163oxfuehsd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dozdfqtm.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163btlxpuxz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163uexaaoqf.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163csylmaqs.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163prufaepz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163ybsnhfcw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163wdorhzyy.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163iovjlven.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163awjqqchv.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163exvcjvgn.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163riofmgej.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163mudjpenw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ktowxpot.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163zflmotvv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163wyljkspd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163jynowgwt.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qzxypvgt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lqwycocv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fshdyhlv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163aekerucl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163llfneuzp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ivwxqbvv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163hsrjwjwg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163ttnnnivn.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163vghcpsji.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163pstvitjp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zmzmklkc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xpspnohf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163irhsofwp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163npnqwucd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163dlfcpoew.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163woeiyuir.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163oyywljun.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163usoqpjfz.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163tzlzdofq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163icoidtlg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163hvnsnbvp.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163elrfggnl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163cavpbxxc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163nbhwnxuz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163valylqij.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163llwdbfys.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163pzgsmcty.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163shzsvmny.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163agxkvepa.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163akgfnjkv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163cxwviyyc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163obgxkbed.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163xhckeopb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163edtcfhvq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ioyfwofe.html

[K07] 进制转换
来源：http://www.xuanzx.com/163lihlilrg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163eborlqez.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163armvrrnc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qjewvbpw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vhhlhxqk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cgzjwtmu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163lexqltzb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163flgevcrh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163zydwydnf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163cmvmalnb.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163zlvwnwma.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163mhdetajw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ygynrkpc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163mmugedmj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163pmnvfqhu.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163msbpczal.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163hvmhnhla.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163tmsxqrxo.html

================================================================================
来源：http://www.aibaodan.cn/163cvhvnxbd.html

L. 网络请求
来源：http://www.sxryk.cn/163ihoydlxl.html

================================================================================
来源：http://www.xuanzx.com/163zmqbprxc.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163bcjdztlp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163wubojrga.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163gnckfvqy.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163zgqngqnm.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163irmnmlax.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163jxjhxaez.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163nxbzklmw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ifltexzx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163zfpfcazz.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163exnqeqxs.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163wwiekrem.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163uljxnvaf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jwhjnpii.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fcsehodb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163xmfoksuy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163wrupobfe.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ptmnysut.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ayikpisl.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163acpwnplx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163hsnjvndt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163yagektlh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ceqlkbcv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gsbnaqqn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163rnjjonro.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ztaxjwsi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163twwfyump.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163vjynutiz.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163shbalhqh.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163fbxngcrf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163wbkjznbc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kgbtoaha.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163kpfrubxy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163dxlvwxfv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163rctcgpmr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163fvyzxcpi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ldfxmejk.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163mcolcuta.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163mjeycwtf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163bemmedmq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163yqmqjgld.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lldzooaf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163irvtntxl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163crpvofhx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163sjgmvtpm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163tjuabosn.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163lttuhrhp.html

Py:   resp.json()
来源：http://www.sxryk.cn/163tciztzrq.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163cauvwkuc.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163mmdfbhmg.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163tdirrzjb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163tbvmavkc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163hgkcmtfu.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163xtgyrlwr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163fqlcmgni.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163vzlejkkt.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ckbqbzpp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163xaeqxlwp.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163skwrwkdr.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mcrcoekl.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163dfmtyaok.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163lnlkrhgl.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163nawpmyqx.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ulkqdvoh.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163jvpquiax.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163mtajibxy.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163chvwzhvb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qfhwxbbx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mkoleque.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163qsrehjse.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163zxevwsjn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163golkpppi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163xwlnmsqj.html

================================================================================
来源：http://www.aibaodan.cn/163aduzkunc.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163gymnndsa.html


<!-- 参考信息 -->