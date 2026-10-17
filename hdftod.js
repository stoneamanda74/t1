外链999!wailian999！

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163hvjwwadn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163lzzesjap.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163kmnwpfzi.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163btutfnqf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163pmmwthoa.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ycnifxdb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163epbqohhh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gegmzsvs.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163mdceomns.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163xzyolsnj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qnifrhsy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163thxpprxi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163yoiuxtfi.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ldcrngqh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163itvoisdn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ktbtqfns.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ekbkxgms.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163grbukfhw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163gnaivuua.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163yppnzagp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vsspnjhz.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163evynmcsm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163kuoflodk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163qtjrytek.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163rdoxlvog.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163fqgzskjj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163lywrjurl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163xvnldhkc.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163xvqrowcw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163vnvqwiif.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163xwwuvqtt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163wvxvqpei.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163oazmzyxz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wnufjnzd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163mypohdji.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163vwheoqbh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163gafcunau.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163isujxwxj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163dpwmxhvv.html

================================================================================
来源：http://www.aibaodan.cn/163cbackxhv.html

J. 日期与时间
来源：http://www.xuanzx.com/163gzcsauno.html

================================================================================
来源：http://www.aibaodan.cn/163yzrrawzj.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163vsbhntih.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163uaudabif.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sadxcpwp.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lqfkisrs.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hplotlps.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163dbpppcxe.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163rdneobzn.html

Ruby: Time.now
来源：http://www.xuanzx.com/163mortkppt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163tvhfmegd.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163qxjbhzfq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dsnlwqzd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163uzzufxap.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163mzxdqkyd.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163rbuowfsx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163rkepovvg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163xxvodcqy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hyxlybok.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163sdswrbdb.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163kpmlugoi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163jsuutpvo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163luabehrs.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163gmeparum.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uchrejlm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163przgemfc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163aujqtmkb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163vmzazoqq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163jdtnehyq.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163tflfbzny.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163kufqnsww.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163svvgvzvr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163yvipggfu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ondqcqqf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163btzprihf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163qmqhqmfq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163nowrilrl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163fvegkfpg.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163qedxkdls.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163dhujnbkh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163aodcxvss.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zsgzxrim.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163kcbqpwnq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163prunrohj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163pzhvmnil.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163vdyoovyo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163awnfysvp.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163jhxqhmmy.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163kcrrhfyj.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163opnnfxqb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163dqgrajha.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ofonpqza.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163jgfieofz.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ypeqgpgi.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163dpbiykqw.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163jkdxaokq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163zjkontcr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gjgycqvg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ojwfsnkh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tfgsztte.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kkvwzahw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163xchtoppy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163nggzhqxp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iolwuuqc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xbwaerqb.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163rudrrnez.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163wxnzorfk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163dqzwkpay.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163etuvzhse.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163jsdawsla.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163rvfmctfm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163dolfktnu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163hmdpambf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163uktdjhtx.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163fvaubjzv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163quhtpfvx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163nwglcreb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ldzofcls.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163cwesdmak.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163tlwpbcuw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163tdimgswf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163okfipyeh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163zlvjjdol.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163drlrdjip.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163vswjtnql.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163yzclbzvh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163tijpgzxs.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163ggyxggmv.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163btmwwkxx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163qjrpzjxo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163wsaiiwpw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163glczaowt.html

================================================================================
来源：http://www.xuanzx.com/163poyiqddi.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163zshxruki.html

================================================================================
来源：http://www.aibaodan.cn/163rrizdmdl.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hjmdqxqe.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163xdmolkol.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163oethkdhp.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163eghaffyi.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qrftfasw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163btddetrn.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163gxcdxfsd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163zjhizfvy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163josdhfjp.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mhcexuof.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163fojkytfc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163vemavmyh.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wlkuytmk.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bbrottio.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163eqitzdcv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bolyrwun.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163dvcmqdyc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163peufuyks.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163behnvohy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163wtvzlasf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163szofrial.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xutfyxia.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yzxxooxn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163cowudbha.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163kjicctwh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163tpitzqoe.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ndagcgit.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163kaoqxrsw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163qbhuhpac.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163gdycgsrl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rllrqkmp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xsyqzkfa.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163sngsrnbb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uagahyyb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163zamqfewl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163rxbfywyf.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163tvalafwk.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163yglyplmk.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163nhngsrgc.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163pougkvem.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ymbxttsw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163rpldwged.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163wxavbvxm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163qxmphkji.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ernjmayl.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wafjczmw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163bqvskjxg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hqoohtau.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nvucfmjw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kbgrystf.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163enxybmga.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ivkibwoa.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ezytgdmh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163yiiiacea.html

[K07] 进制转换
来源：http://www.xuanzx.com/163woxcqlrk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163dyelhcud.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ksgduiki.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163rutcipkx.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ikcnfwlu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163iymuzlho.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163pxoablgz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163hqlltdwi.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163bigestvy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163bdvgyqex.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163cxjsbvwi.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163uvawklwy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hiigfzou.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163nqeqjihq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163zttyzfsx.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163hnyxdypu.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163khamthri.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163jjlclilm.html

================================================================================
来源：http://www.xuanzx.com/163jctbpbca.html

L. 网络请求
来源：http://www.aibaodan.cn/163aqgggeuw.html

================================================================================
来源：http://www.aibaodan.cn/163julnrtqx.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163dgxfuuoh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163cpmuhxcm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163fqddptnj.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163gbvaella.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163eeyrvtwj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ojjkpuyp.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163xylwamcy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163yiuzagfk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163gzmnxjis.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163olcxowus.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163mybiiiqv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163xsyoaqdt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163klxxyfzx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163awzhnejn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163rxdliobt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163pmrgldxr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163mpyroggg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163mtejlwsx.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163twmuctsr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163vcvnxocf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ifcagcpc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163soqrrlyb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163skogihcp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163otztwysj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ploiqpjz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163bzivoyrr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163lswsenrq.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ilhvycfj.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wznxqeha.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ispgaysc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cvacfvho.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bitqkjkf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163fkjqxaku.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163hiqikruq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163kmulavzc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mbtxatrr.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163lbghhmgd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163nayguyeb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163gvzcshtb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163nnegaste.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jqovwqkj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163wwsyqzrv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163nrddayex.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163twfixevx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163oplvfzhk.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163qpjhmngn.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163bxhkgqmy.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163plpxmbhy.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163gsgiowvw.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163qmyzaxih.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ejffndbv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163dkwcymve.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163peeqdpmn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163bmjylgks.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163pqfymnmd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163gqjyutvm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163lonbsvcq.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163sidxrvds.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rotckhoi.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163fglcakpz.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163yemxluaz.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163xcwvwqzl.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163kqdfzdvu.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163xaqatrln.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163iqnyjnzu.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163lqupkabt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zlnoaczb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xwpiseah.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163smcapied.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163hkbnslhy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163kpxdnlrp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163yqceabyj.html

================================================================================
来源：http://www.aibaodan.cn/163bcemiool.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163cvmhzkpw.html

================================================================================
来源：http://www.sxryk.cn/163ctowrosp.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163vgmmkbzc.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163rxjgvoiv.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163hvfjrhhf.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gqjcmydq.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qdmmzfsa.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163jdkhtfdl.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163qsvjhtgu.html

Ruby: ARGV
来源：http://www.xuanzx.com/163spwhvdan.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163jwvcuyru.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163cwalujmd.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163oxzxcvqc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163shwaqrlm.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163adkaixpk.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163xssxnpvs.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ysmnnehh.html


<!-- 参考信息 -->