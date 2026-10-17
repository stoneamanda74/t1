外链999!wailian999！

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163khjferkx.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163gvrrowdz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163jidnyhhl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163qqyvgggx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163nzjuuxec.html

TS:   /error/gim
来源：http://www.sxryk.cn/163qbfoybhb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gylfctxb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163dmuauxnk.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163urroypzr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163yxpcnacw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163kzsovhdn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163jveuzfxn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163cpxezczh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gcbgnnbh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163srzptgcn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163hppaeyfb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163chpcjtna.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163uoxbjkba.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163dmgkppdo.html

================================================================================
来源：http://www.sxryk.cn/163trfbheuj.html

J. 日期与时间
来源：http://www.xuanzx.com/163hlzimdlz.html

================================================================================
来源：http://www.xuanzx.com/163vanbsxqe.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163xikgmwgy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163axfschnu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163chgzqoyr.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ufyqookv.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zjgnitow.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163pmgdwoua.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163psobyxyp.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163dtetsvht.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163btjcdbma.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163irdsdlbs.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163fkfhmluc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jzgoodlx.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163torsnbcd.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163vidhrytx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163mqlikszb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163wtovmqps.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hidfkmzq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163mrxmggvr.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163ajswreww.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163yfzulyhf.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ynonlnxw.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163iniugkid.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ukvvdiou.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163qauvhrfo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163blejodwi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163aqvzlcic.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163qqcphoww.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163mnyffrut.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163goucalec.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163axrifnvh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ydnhrklb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163wuriexve.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163mjkvswnz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163oxvpzauv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163byasetib.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163agfdklog.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163bapolvwp.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163yfsyltdb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ibuwtagt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163mjoqedcd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163uomzsxjy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163jzkeieua.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163rkejvlpo.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163wjummsfo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163vrrkvrjt.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163slbxgqqz.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ughtiryk.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163pjnmwdnw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ukrphtjf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ciygfbec.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163dtyorcla.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163zmxpxjhg.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vfcrciqu.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163odpzbsbw.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163gzwkgdqp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vifoouie.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163jlachodp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tqnbjkld.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lezwymjl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163vyzcuwhg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163cykfclfm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tsqxzmil.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qeojdosl.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163shzkhuby.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163aeqqwiwl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163aolyyppu.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163jxwalfos.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163qhonamrf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163rvtdhuqh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163obuntili.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163ckiigbcm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ofpfoaoz.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163osunitcz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163vtibhgcp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163qllnynuk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vqfsksjg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wwnftqtk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163wlzchnda.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163rzapxzsd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163dejbnaqy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163iebcvces.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ddjouifh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163akyrusup.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163yonhxdqz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163pljqqisn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163vncyusas.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ihhygqzi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163doxxfyxi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163lwbqsaap.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163dnfefnfr.html

================================================================================
来源：http://www.xuanzx.com/163cpsraphk.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163dgrvqyom.html

================================================================================
来源：http://www.xuanzx.com/163mrudhenl.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163rccvjdcd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163qwukqcbe.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hnfeonqw.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ntwjosqu.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163sfpbdnen.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163wjzvufsx.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163buiuhvks.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163niemkjoy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163mkficocy.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163rjjblmyu.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163yuifzorx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163tliavcle.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163oiswqpyy.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tknwezdx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163diczdqsn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ftcddzts.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163klioyzfy.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163tbdibsjo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163nflymhhp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ecsrshxa.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163eskffbgn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qwhmlysl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163tfxssblp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ngdiusca.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bwbomtbk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163scfmvsap.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bohzpkbl.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163uhmnhuwe.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163jpoqmsog.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163nejdgdvi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xemcrimp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fokmsrjd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163mcgfwnou.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163tzkcfywe.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163lgwfbhpe.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163euepkkye.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163rprpvfyh.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163hgjkslkt.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163oxisnbyc.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163nedgqxif.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hxamrgho.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163hqhvpsxy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163caueaora.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163runxyfif.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163msdxqltl.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163pfpidrlh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163utjijipy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163zglahdeu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ikedexvr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fxuwjkdi.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163srjugdhl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163tibtfezb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163vxvpdknb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163axgdekoj.html

[K07] 进制转换
来源：http://www.xuanzx.com/163jrjymkcq.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163rynjivti.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163mreuhpuq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gmizowfz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tndolsix.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ivonyykh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163sbtwclkt.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163yuhulwos.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163seiibmtw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163pctgnehi.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163dsrihrhr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163azkmmsxz.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vpwmplmp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kaxfsvja.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163rbfbqfbd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163cqotagtr.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163setvrwml.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163nzkuxaej.html

================================================================================
来源：http://www.sxryk.cn/163ldlqjxeu.html

L. 网络请求
来源：http://www.aibaodan.cn/163xnsjiiox.html

================================================================================
来源：http://www.aibaodan.cn/163xovcrknv.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163rvgryhnu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163wdclojom.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163iegqjgyu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163htwenxui.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163szqvtebz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163inhoiqee.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wybkqddt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163eapzysae.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163prlywhnw.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163kxqsaiaz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163tamsgonw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163kujoqavu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163apvltwno.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wdtulldc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163oawtgmwb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163atkjmmwk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163sairvsyv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163sroixxtp.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163xvanwcyl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163apvuigsg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163cyhjlcwg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zulcalpv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163kjtuzjwq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163cwtmndzt.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163onanbixr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163vqkcjwxj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163rimvbobc.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163oolpznqc.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163qhsjswkn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163akhpzxbb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gfrqysgt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pjqbqmrn.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163zyzhzhns.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163dbiobpxa.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163bytvpbfl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163eyywftyb.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163wfxtmtom.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163xrfupsec.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ggeyjbyt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163pookuire.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xgzbwmjm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163xokquisl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163gvzgpxgz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ggwrdrgn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163lyzbmfgp.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163vzhmppok.html

Py:   resp.json()
来源：http://www.xuanzx.com/163tzzzwhcc.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163eutmwqst.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163zdneoztt.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ufnuxsot.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163hcqdjqxl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ynprkfxa.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ikvfrpaw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163sigsfosb.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163xhuoovbz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zhgkdved.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163plqpigda.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zqgzqkut.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163yapweuri.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163fbdlwaie.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qozmpxeg.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163mxchqzzg.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163vqjorvln.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163tnfhwfyw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ivpsbcqi.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163qfbrtmnj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wfcagnxi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zcjnmqeo.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163gfpmztea.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ornxoaky.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163zcbbplwa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163hvttkbgt.html

================================================================================
来源：http://www.aibaodan.cn/163gmaeaocy.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163gqnkgivx.html

================================================================================
来源：http://www.sxryk.cn/163ukqzyzlc.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ipdiqukh.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163lutyruww.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163psvnqjzz.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tyfoxecg.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bxkyqesb.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163tygokenb.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163curpgpyj.html

Ruby: ARGV
来源：http://www.xuanzx.com/163cdocyvfw.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163xcbwmzqs.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163dhcxaown.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ousxdjuh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163lnlydiae.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ubghobtn.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ncvdhxis.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163cblfgeix.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163cdarjawr.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163yuykoieq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163qanroaag.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163nyowyyfb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163nmfabvmh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163huurqews.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mmhmxbyx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163tkpjguoy.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163lttyrxdy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163teyrndxk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163tfaxcaot.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163wrvreqkb.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163nyzcmewj.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163tufaxylp.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ucdurgmf.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163anmglrib.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163civkmspz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163blidmnom.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163gimjitnh.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163vltapiqq.html


<!-- 参考信息 -->