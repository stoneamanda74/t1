外链999!wailian999！

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163xbywubis.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163fhvmcylf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ppwkdkzm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163bcvugvif.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163dtgsqzvs.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wfhzbyuu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163sfosisjs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163prpioxgg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163byzewnrf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163mpcusonf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ffutxitf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163zfujpbdc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163arlqnlio.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163wurbgdno.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163jrvgmbqs.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163iwislmqg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163xejvkrsa.html

TS:   /error/gim
来源：http://www.xuanzx.com/163nqjiqdln.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163nguzckqv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163tcizprim.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ystjwenm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163wwdzihyx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163nucdxwvw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163jsrupzxz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ghevcjra.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zztfpqnx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hpfrftzr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163vpblhhlf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163mgnhchgn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163bhqdgxbr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163iudykrxz.html

================================================================================
来源：http://www.xuanzx.com/163wntgoylw.html

J. 日期与时间
来源：http://www.aibaodan.cn/163keqvfkky.html

================================================================================
来源：http://www.xuanzx.com/163wtbpwfpp.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163prldgdyx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163nxjcwucr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hchhghhi.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163chwdgghe.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163saqqjsiu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163tpnmjsks.html

Go:   time.Now()
来源：http://www.xuanzx.com/163vhkdwtmb.html

Ruby: Time.now
来源：http://www.xuanzx.com/163jageygty.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163giosrbhr.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ozfdrhlp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fxjqczxh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vpesrnao.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163sklwvenr.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163yibvuctj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163kuarkylt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163relpriuv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163otrugqjp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163rqrmalbn.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163cuqjydox.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163kctpknsi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163yfthpock.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163oexuziqb.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163dqqikaop.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ikdgngnu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163qomswgef.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bzjgfhng.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163onhrtizx.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163baocanvu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ptysqsby.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163qjxnsvdw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163jijitwqx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163gfqzszet.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163qrnsnwfg.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163glsbfrpv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163vpzekptl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163cxvfchtf.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163bfpdcgda.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163qjhqckiw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163btyduldu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ubnboeox.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xpceggul.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163relvvwbg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163zlppenze.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163iaswabgt.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163hhwkuowh.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163vpnvhoiv.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ybuvasls.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vzcuymjn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ioesbunh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163qgpomres.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163gnlbtufh.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163sxcfvjbp.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163uqjyltmw.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163zinhrwgv.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163shblrxdj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xmwjvjxf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163kptgulac.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rarcwmji.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163iedcmkkq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ypjkglps.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163hjjawygs.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ptwssjhf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zeikzabi.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163gxyukhxz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163hqjodguj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163slijrkhr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163tvoebovh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163seemhzts.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163uottjshc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163fnwrxbpy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163foavttmi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163bvrycfgj.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163fikwqkrv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163kpkmizco.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163hanlrpeq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163hprhjiby.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vypgpjma.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ogmlnrhn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163nptbjgam.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163djmgsbrv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163suzhzzqy.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163gyjdvekr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163nccyiyxt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163yeekpaxj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163pydxudct.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163xabpdguy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163rzfvwgov.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163tkducfwg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163jifbfitc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163civddelc.html

================================================================================
来源：http://www.aibaodan.cn/163wzxwqrqb.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163krzhzgam.html

================================================================================
来源：http://www.xuanzx.com/163lukprniu.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163wyzpplsj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163mwmjmrmb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dmennsxx.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ukyihkze.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163scvfkzpf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163wibencun.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163yjjmyeim.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163kdfsyfag.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163enazltbl.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163vugmdoqe.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163obcmzowk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163euqbinba.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163invvhasp.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ubsmhkkb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163auikimie.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ziorrkho.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163wxjzhgod.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163zcwxbtrt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163jysfexmo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163alypzolc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ignmyrix.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zqzckrii.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163prinanya.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ehgwdvvy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163pwejipgk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163nnohpcft.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163mypuznto.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163dxrpytlf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163xfijtduy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163wkzmzjyw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163tycxksju.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163aovqsulo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163epbmlnsj.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163wtnragsr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163telumchu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163kqclblsq.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163oqguhlbb.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163rgefkenv.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163kzlbqocz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163metdaarg.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mkrkhavw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163nbwqowbf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163cslvrdal.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163wahrxknt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163vhgfsaxc.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163pnlvitiw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ufrjinag.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ajzqrfao.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163njzgsncy.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yohiakqk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163crxlwtfj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163lvlfnzmv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163gyoszryh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163bmqecoim.html

[K07] 进制转换
来源：http://www.sxryk.cn/163tzslzcdx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163ksptbloz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163hndemysc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163emkeuwcg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lqjxtkil.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xiyrllsi.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163jqfvrtxx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163gjqeiunc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ppnnxvjx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163ckqmtucc.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163oukqkhqp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ksmpentr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163lyeldycb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jrkflqnn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163twyhipyq.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ruxtjhrt.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163lmvoxsvn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163soydikml.html

================================================================================
来源：http://www.xuanzx.com/163viaxpdel.html

L. 网络请求
来源：http://www.xuanzx.com/163zisbnvzn.html

================================================================================
来源：http://www.xuanzx.com/163xrhhjxyw.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163eatlioip.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163bvaqikdl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163kfvclpuk.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163egffraqp.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163uhyxqirt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163caoffopg.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163pjrijjfs.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ziisedwb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163aughuacv.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163wllvrgua.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ddakoxkz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163tvssidmo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ojzxfswp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163fibjqcuz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163jolzisyr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163vrxrhrin.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vxwyaxzn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rlrsklur.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163rxhttfna.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ntlmluzb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xerynasz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163aroeqtxx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vhossytw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163etccwzxb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163iysitpcg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163bwyxowmn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163agwbfkcq.html

[L04] 设置超时
来源：http://www.sxryk.cn/163howtwour.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163yesepgcy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163vauwwust.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vvyvmwss.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163eiszmdcn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163mhnuloxw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163sipnhwqn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163efiivhoc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163dvrznlne.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163bsjfhskb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ynpigqzv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ihpuduex.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163monetowo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163yomurlqb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163lmdtuxee.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163dwxzzunu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ylzszqsp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163qnmwwbto.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163uhykvohl.html

Py:   resp.json()
来源：http://www.xuanzx.com/163tcdnhdoa.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163srdipfoc.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rkwpkivk.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163fbggqtth.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163equhvfdg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163rjvwotbf.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163jdxnifdn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163gamxpiil.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163tphkknvb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163roaimoml.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163tfhrmvrc.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163frafpbni.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163pilujxun.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163numvkxxz.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163nvgxivtj.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163gsaqaxpv.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163nlhahowr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163xnptxeyf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163gerwedlx.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ejdkaywx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ppdslcfs.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fkhdkdhf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163cggsaeti.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163yjwfqxbe.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163nqhcigto.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163huayynrm.html

================================================================================
来源：http://www.xuanzx.com/163isefxyyo.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163inqrmdjd.html

================================================================================
来源：http://www.xuanzx.com/163ulnpohmp.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163nvtnhisy.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163uubqnkxx.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ficfptwe.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163eqanqfzy.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163rxgemgiy.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163vfuawaku.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163oolyuakz.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163jepawdwi.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163tklmnnxq.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163szqpyhfv.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163edarngzc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163uhtzjeex.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163bnfeoudr.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163wxsdlbjs.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ildzorjs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163kxtanbkm.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ycomgfyn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163clxsvrcr.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163qipdxbmb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163cxjdrocg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163atvqnpsr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163uuggixvk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jcvutcaj.html


<!-- 参考信息 -->