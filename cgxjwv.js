外链999!wailian999！

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mqjfdwcv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163wvcqkesz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163dwfumdio.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163bhczqhry.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qcnyznzt.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163niraglzq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163awphnomi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163dmdlyjmm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ecfuzsgk.html

TS:   /error/gim
来源：http://www.sxryk.cn/163easgyrol.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gulenfgo.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163jgnzhkld.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163divzuigo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163stdbulam.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163mbzajujq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ztsceeil.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163dcunzuck.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163yeyialcn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163cpiheqgw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ecjiocjq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ltnflxfl.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163byrtkqip.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163eyhqimgu.html

================================================================================
来源：http://www.aibaodan.cn/163hyabkuim.html

J. 日期与时间
来源：http://www.xuanzx.com/163aozzprms.html

================================================================================
来源：http://www.xuanzx.com/163zagowdin.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163wpjpissb.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163jmxgkxuf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rjtimmos.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163endxqzev.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dqlpsgsp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163trirmked.html

Go:   time.Now()
来源：http://www.xuanzx.com/163wbggtgkl.html

Ruby: Time.now
来源：http://www.xuanzx.com/163tinkbnvg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163memgxcjk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163aokcsfmj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mykjocqc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gahofvgt.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163zajsefxi.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163vtarvqve.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163oloovhwr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163qyaehhyf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163wozxbidm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163iayczguc.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163sbneuwqo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ngxlnaji.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163aewwkgat.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vzogtrvz.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jdxnduhl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ypwesfuh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163mhrriwam.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163aventnig.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ifeqackq.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163eyeatuut.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wfxhtxvp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163rpspuaao.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163cbuidvcy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163fdwideml.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163mubaxpgi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163llbdkulj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163qrluecwa.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163vylxguob.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163bwkhesem.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163fzhcenzs.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163qnxpdhyq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163volqiufy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wcsghnhg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163toecbtzj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ittkhahd.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163lnuccrcg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163pgtbvued.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163nubpevdo.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kdpdkehe.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163uvcpixws.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163wseptkex.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ohqtvrsh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163rkndnfok.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163dflqywwf.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163eighrcmp.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163qnweinqu.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163hkauvtyd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mxxtgobv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163lrmznook.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ukseszco.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rhkiogue.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163jzbfpdwz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163hnijkeab.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nimcwkxg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pkjaavgm.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163hczkldtc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163xfmymgzr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163yvyzdlgg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ahdkmnuy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163fgnpzjzy.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163oqkbcdyw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163belybhcu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163uoarzqbs.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ynclrosy.html

[J09] 时区处理
来源：http://www.sxryk.cn/163noxfnniu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163vjmbpbah.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163xrvgiegq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lnqwimca.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ywylvsmw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ttjvdyzq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163cjairnpw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163iizjqgfr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ggfbqzfb.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163zextoaee.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163bkitixvm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ebvvsbpn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163vpqpdxsl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163fietuwdf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163frgbxsax.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163xhcpjujq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163bkgxqovc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163uhjhvtzh.html

================================================================================
来源：http://www.aibaodan.cn/163zalgfthj.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hemgvoht.html

================================================================================
来源：http://www.xuanzx.com/163acmxkxgg.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163meakvznd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163tpyxrlnw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qpgzgqoa.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ofgmeulc.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163jwfrbavi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163rhzfkgxt.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163epvzuqid.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163qhayiycm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163lltdvkys.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163qjrznlin.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163rxludcig.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163kqbokqnb.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163erjngjrj.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163pbjzbdxa.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ldjuhbmv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163tkzluiqx.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163wxxyljxe.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163qpopscmd.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163pyvslfuw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ztzznuow.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163cruzzfee.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xroiqpwn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kvsyrlod.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163uuqdifcy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163hvduwtod.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163vjhkbtuu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163diwaxozi.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163wwmdibrp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163fuocykaz.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163yiykqqko.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jaupkenk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163sdtpjwya.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163xnqcjayi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163syyazdit.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ykcjzoap.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163rfzszgda.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163kkmaudgd.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163vvuvxzkn.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163uhhmumtg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163dzrzkgrm.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163riheirui.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163euereipn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163qqpyvlwt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163nwhkoblh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163tnofkrpa.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163cyzkxreu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ovbgebvh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163pkiqbnln.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ynxgvjky.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nfgwczkj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ozideisa.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ldwyqyfs.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163omhvdwsa.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163rgwyymoo.html

[K07] 进制转换
来源：http://www.xuanzx.com/163zjkyugas.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163lunzjuic.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163pwersmvg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pcwnssch.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163iltsjxrq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fpwvxxbo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163njvyumcw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163kdhvrckj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163abprectc.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163leswwras.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163robiinpp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163gurauvib.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163nlotvjlw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ouuknqry.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163smimkojy.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ozjicehy.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163cdutnsea.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163qgbqndsk.html

================================================================================
来源：http://www.aibaodan.cn/163kpsctliy.html

L. 网络请求
来源：http://www.sxryk.cn/163tltgntbr.html

================================================================================
来源：http://www.xuanzx.com/163igjsaczo.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163pggsqikr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163olgavbpc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163evxqzzgp.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163xemfvipf.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163shobckgx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ftmvjcqa.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163piudaujm.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163awlvuigi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163nivnamtx.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163xllboggj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163vaxtuuoq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163uqxbpcer.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163waumxgda.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163elczmpel.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163avewelxr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163trfcylij.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163sbgmwzsd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ukukubhe.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163pbjzpjdb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163mvhafjba.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163zctqpgwh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zkwadhfu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bmhanzdy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163mswshjaw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163rqqbswtw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163jmojzhns.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163uvrahzru.html

[L04] 设置超时
来源：http://www.sxryk.cn/163mmolkcci.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163fbigfjcy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163gofjjwqo.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163muwdudoe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163uebsutgq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163bvuwdhdt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163optotupm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163skhohcwe.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163cgqtowag.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ldgrltvy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163djogjwzc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163vbdarwsd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163osbrwfit.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kctfkuno.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163nyjjqmdg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163zylxkzyg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163muvuqmiu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163ipngzmkr.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163vbtozqun.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163fkgcluhd.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163anrmzpfd.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163zwqeknbc.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ahherljw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163jyjpbudu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163eozferko.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163imfdgtsh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163dwcmaunx.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ywhndgso.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163wdvhtizm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163qdqknizu.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163deyrbowy.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163jpjzqgkn.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163grkmtljo.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163nvztyzum.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163bmfpibrb.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163lacgouev.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163vcahwpxc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163peewbiom.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163jhtzebqg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163aqkupfxw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163oseryvfj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163hmubsrxa.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163usokphtr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163qelrkiua.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163fnbtmdcb.html

================================================================================
来源：http://www.sxryk.cn/163pkvorjke.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163inobyolm.html

================================================================================
来源：http://www.aibaodan.cn/163oyhzvrsu.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163daxuvkxy.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163asqkgcdd.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163dmheofgv.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163prsyhaym.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163yhvnsnyy.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163hkyfrrsr.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163lvhndadq.html

Ruby: ARGV
来源：http://www.sxryk.cn/163udlppbts.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163czvquavn.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163vwdzsvjr.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ujaekfwh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163xcejhwms.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163yjjqcrwp.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163qdcyhmmz.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163hgnqsine.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163zfhidhez.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163gsoumsjy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163zyoqetto.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163gkjucxjj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163drdorbxd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163sdsymelg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qmtewryh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lbuggevt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163uqdpifcx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163wvcjyyfs.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ldcpwgan.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163lxgkwfpr.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163haehhasq.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163kadsjvpf.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163qafozfyw.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163wimjmmxg.html


<!-- 参考信息 -->