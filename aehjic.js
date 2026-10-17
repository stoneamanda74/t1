外链999!wailian999！

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mtoleuqz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ntoksucs.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ggowwtxc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163uehbqgjg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163onarznpm.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163gfkgtrop.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163eydepmen.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163nksbyyil.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163epulzdgo.html

TS:   /error/gim
来源：http://www.xuanzx.com/163brgazyqn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ysdpiuve.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163axylltgb.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ezauukpj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163evjsndvr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163tvonxwoi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ajexbthw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163swibbzcx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zttyrdov.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163lrexhadu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163jmqmnvrt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163lakjqytr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163goprlupb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163sabuoayl.html

================================================================================
来源：http://www.aibaodan.cn/163uafzmmfx.html

J. 日期与时间
来源：http://www.aibaodan.cn/163cqqtolnu.html

================================================================================
来源：http://www.aibaodan.cn/163pxkquqtm.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163mdzunhpa.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163fovxrzes.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163fntblinp.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ncuxasbs.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dkgdeutk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163lazdieci.html

Go:   time.Now()
来源：http://www.xuanzx.com/163nuibokgq.html

Ruby: Time.now
来源：http://www.xuanzx.com/163yrsnnjpj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163xbixtltm.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163zkxuagss.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163mokfogry.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dlrzxiss.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163arobrczc.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163fdbypvuv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163zyjlzyis.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163yotowwvr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163nyofldnm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163zamgsdju.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163fiujiago.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163fetddqmw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163wflhmepu.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jikzefdl.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163jwilizbz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163kjomcepr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163iqcpdwlc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163fikddlwl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163jqmjuofc.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163afcbpacx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163qxlohgzp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163erdcbywg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163euxkmehv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163jaramvpt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163rtsuobfp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163svikieae.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ibfibowi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163dgpbargs.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163glskgfzt.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163tbhlvjao.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163lvpginkz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wkftujlu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163eajbecin.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163lqvqkwqu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163aczygfro.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163siwbazli.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163kivcckuf.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163igtqbnus.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163xsageozy.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ojnkaset.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163azswemqs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163alsnooyu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163vypivhpp.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ejgmpjnt.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163vkvnphih.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163qunauvne.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163juknbkfg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163logekdfm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163yattjcjz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zsofkuev.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163abhdmnuo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163vloumveu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163usthojci.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163oyrkcnoe.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hzzzadwc.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163itmkhqho.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163cybkzqls.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163kbzhwwzw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163eetzeriv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163vdceiydg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163uwxoybvi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163khxcfejq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163txaopjlh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163stjgnxxc.html

[J09] 时区处理
来源：http://www.sxryk.cn/163pstjcxvc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163rzmjsdvx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163gnlvibna.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wlrjxvwc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163aoiludzx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163gooxvorz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163zkdnmrxs.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163thjyywcl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163lonctell.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163fwmywudy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163dulwyaqe.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163kvpgnwlg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163vwpmxezr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163sfmevsko.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163zswjtykt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163rzmybxpc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163nkuqsxhc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vwpwjnjn.html

================================================================================
来源：http://www.aibaodan.cn/163effjsoho.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163dfwofqrv.html

================================================================================
来源：http://www.aibaodan.cn/163yaqkncto.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163qrvnogve.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163umvvvcpo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163skzvnmat.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rulrlkey.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jaqxzkay.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163neivckhm.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163skkbqhhw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163vprhtqmg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163kygwwcvn.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163zegizszy.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163lraorgps.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ippiczbo.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163whghubmn.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ovfrmxkg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163zsbpamun.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bivitogz.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163jgdbzsdu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zafjyfrs.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163zyejvipb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163yllbgvij.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163emthquip.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163goqbvgdy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qfettdbx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163cqosawyn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163kphtwdwe.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163oaxnajfw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163nfvoqtdr.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163gfivjnbx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163mvzublya.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ovypfmvl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ccdxdpff.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ubsspnoz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163beecguql.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163geegmdvr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163wvsjspyu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163radusuxg.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163nhywtibz.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163twlkmrdz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ilwefhar.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163wkiagjbd.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163aqsykppe.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163gtxonamw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163ghjmyavn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ogarexxe.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nsptbvno.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163shhrfyeg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163lkpwkgpc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163csuflngz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vbhfgbyw.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163vparpzdc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163xqjiygag.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163vwylwkak.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163dlmufuvy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163xjqenfxk.html

[K07] 进制转换
来源：http://www.sxryk.cn/163urnoqtbi.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163cybduyar.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163tmhqyqqw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163djescfhi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cxnqzxwl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163gxcedeem.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ljuecdty.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163xzlqzcpt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163xwogahzj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163wceokdqq.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163alxveuou.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163fhshsyrz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jubvgyhz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163fvlzfzex.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163axsjndsu.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163riegxgce.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163fijvwegl.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163mozmarue.html

================================================================================
来源：http://www.sxryk.cn/163kahrbqzn.html

L. 网络请求
来源：http://www.xuanzx.com/163iqgmwrin.html

================================================================================
来源：http://www.xuanzx.com/163fbytkrth.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163bucyylgi.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163rkaluhrm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163eoozjfoz.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163xenqycxm.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163jeiqgeei.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163svjpwoki.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163onyqqxku.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163zoopxyxi.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163mqegfsgd.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163mnryqime.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163yjsiabcx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163seymguje.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fiatfxvb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mhqjsooo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163popecpol.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163rlnwfrdq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ftalqwxa.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163jfegpzqu.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163uffzouxi.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163xesczgvr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163zwscmppr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163voopselc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ntmmhhnk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163rzjliogn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163rjbahtiv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163sxrbjgwf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163gwibsvrn.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163qpckhnpw.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163nqyjzvyb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163zvyjjsqf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pquosdwi.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163xrfgellz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zdqyuxbu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163wcjiqooc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163accfbdpi.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163kxfhijvx.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163xbyppisa.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163yxhyasdj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163gqdvgxaq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hjfjwdmk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163syindvby.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163gwuzfvef.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163whyvrnyu.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163eezbtvcm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163zjtaqayg.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163hzpzjtvi.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163tpvupztm.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ekprwzqr.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ntnpacvp.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163viooeiaz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163pbbycjro.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163hlpgvkaa.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163yuvdpvis.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163kjqgmheu.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163dmxteujz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163njneotgj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163sbmeqkwo.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163uqpcxadn.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163frbafyyr.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163daxbafrt.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163nnwnbdlr.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zblvrpsq.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ndbuijdt.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163jbrapphu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163pmjzjwzv.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163cxmdoxue.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lfmwakwj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yaiwdlsf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ycypdcmy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163wpqmpkac.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163qmkoxloa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vivndeqd.html

================================================================================
来源：http://www.xuanzx.com/163ndqrdwsv.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163zfgyogez.html

================================================================================
来源：http://www.xuanzx.com/163vzrvfdfe.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163crzptbcq.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163kaefeqlg.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163kpqknatm.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xwnqfbbr.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163oylccyln.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163axcdqqzk.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163khafsznu.html

Ruby: ARGV
来源：http://www.xuanzx.com/163suiqyoll.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163qmotrvsj.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ncxnxxuo.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163bxcbivjl.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163djbygeeq.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163wzryzgcl.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163egrpvwsq.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163dcpaouqj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163kepaqxgi.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163itxtbpui.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ghsqbzhe.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ppchcztj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163mfultvdg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163pmsgbdxc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163fjewekcw.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163kvonqpfj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ivmlxtjq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163oldqzlvg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163eoegljtc.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163jrsbecmn.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163keeksqqe.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163pfavwbvv.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163cfrbkxxv.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163nixcdbba.html


<!-- 参考信息 -->