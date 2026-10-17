外链999!wailian999！

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163qkhbkmlp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163szzdtpxp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wtjvhyaa.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163qirdagsi.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163eziznsmg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163poziylen.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163jfmslsjm.html

================================================================================
来源：http://www.xuanzx.com/163fucmklas.html

J. 日期与时间
来源：http://www.sxryk.cn/163fnnumery.html

================================================================================
来源：http://www.sxryk.cn/163gtbbzzgq.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163hibcttfh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163krtszobt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mjrwtsih.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163gwsyeueb.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163djvkxouz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163wzazeptc.html

Go:   time.Now()
来源：http://www.xuanzx.com/163jowzmkeb.html

Ruby: Time.now
来源：http://www.xuanzx.com/163utkorpfj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163zmcczvkl.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163pouuzmux.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fmwiaoac.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xnesbupn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163cakhpsjx.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163dhzekxim.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163mmevocba.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163kkgbdbfo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cyntbyhl.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163vdfmlnyw.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163kaknpwzq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zmdvmowy.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163sjsetwpg.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vryhcgxc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163oazjkfqd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163kwnwjrei.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163vdmvipqo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kdfoemkc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163lkcnxbsg.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163tnpivmzu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163evzcahdh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163jmugognm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163rluzxqxj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163atidvcun.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163arfazhaj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163lxrwozbp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163jlijjycr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163kmvvzokh.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163jbvnvggi.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163bedvfbjz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163nubmspyb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163njevwojx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163uwewuxvm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163hkwslacx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163mdnwrfdo.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163vazoddsk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163crkbdvso.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163bogxpeoa.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163awpkjsrd.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163bdlhghvg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163vfibtwxo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163mwrnxmym.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163uaphvubk.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163pydansxb.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163gjhblmqt.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163pairqucs.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163mtbjjppq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ndnjvwur.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163idsibigd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tysfyrqp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ajsyculp.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yqehlyym.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ojuatyxg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xftyfayy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fzwbjmbo.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163rtiowlyt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ncumhlro.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163rajrmjsh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163seffhutk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163jrcwttkr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163fdtkrrbb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163lcudiivn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ygndkkdm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163kqmrtynd.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163mqjwwshd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163uypszszc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163zuxnqved.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ybtxztfz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163sabiuljq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163ootimzjz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ooqnxuje.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163lshnsbog.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ynzudokc.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163hveqglep.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163peunhvvn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163crhitqhy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163vcbzvopb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163dzeawfom.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163covyeran.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163onvtmkhq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163jrrtbjoh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163jgdcnnrh.html

================================================================================
来源：http://www.xuanzx.com/163vgjnjlhd.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163csrfstvu.html

================================================================================
来源：http://www.xuanzx.com/163byduiqni.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163itltqcqj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163wqbybvyt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163sozufupv.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163exxuqpai.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163oycpngme.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163oroypfmn.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163husvdvoi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163dnumoatx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163mngxsbjd.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163fuuyylqy.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163hfhdsbbg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163gvntombv.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163yhmsltiu.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163cenfznxu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163kkmzbkcg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163tadcozpm.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ckbfzqyw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163qxzohlwz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163pqmzwopo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163eluvfupf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163odubcyuf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163gehmwqqf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163eykorjjy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163bmuhhtrr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163kdkjmlnh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163bpqsdshs.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163xsgqtjho.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163tgdvztux.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163wxlpjgku.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163jjmveudo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163bzlsuluw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vxuknsdj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163jpsvtvya.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163lthkngts.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ecmgofcl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163havympcd.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163cfodtctb.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163ssufqcog.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163zjfouure.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kxilrtox.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vhglsbqh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163ehgrkdku.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163jhhiyvpp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163grkacevu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163sppdtsmk.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163heujimnx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163zxnqjoll.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163mgcahvlk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mkittgmk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jsyxvsnp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163yqxtwbba.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163kmordwiw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ubpuydry.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163zuqqewdl.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163gehttwbu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163zrhiejwg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163vkadyshh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hoitrtee.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ewrctasr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163strcdedh.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163vzriaixz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163uzdfxmpn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163bvuvpgpl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163pizfzgbb.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163isjcuphp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163vjcgqufn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163iucuqbfw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163gkrqwazc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163kznpxpry.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163obojsesf.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163frbmvtex.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163rspbhxkz.html

================================================================================
来源：http://www.sxryk.cn/163vwxrmxmt.html

L. 网络请求
来源：http://www.sxryk.cn/163nffbnjwk.html

================================================================================
来源：http://www.aibaodan.cn/163jehrckyu.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163fvwsjvnl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163hwhtofyl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163jxrndqrm.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163boivvusj.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163rftgvtfv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ckzdkmvs.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163zojbsmfb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163cpoofeei.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163frvkrcwe.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163qhiyfsmu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163fbpnhhhq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ydfpaxzd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163enxlhxvb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bdoiqyml.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163jzeurxjh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163hhlqprwo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163yllzejpk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163tqpiqgix.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163xuhnwqop.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163rgnmnoor.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163guwdssyq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gmpopbcc.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ypjybxdk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163smcfrcgs.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163hojalpla.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163rycspgpz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163vfoiuhvf.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163wxkskkac.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163xatclzmz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163gjsrbxhy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ukfuqhin.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163bpvyatst.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pleeooqb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163rkphzoin.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163adutsyax.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163sjixnivn.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163veajyjgk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163quatxppg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163pvkbtepc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163nzyhddqb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qclkbpkx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163tdygltuq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163fxicjfiz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163eczevuav.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163zmaohesm.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163rwxpswsy.html

Py:   resp.json()
来源：http://www.sxryk.cn/163cjhnvjzn.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ahrmiivk.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ekruetbx.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163afmpjoho.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163dsmqbcqp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163sjjdidjd.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163lhimreli.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163jhhoxqdt.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ikpjspfz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163rwimbpbq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ykedvfgx.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ffabljvd.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nlpndbhj.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163zginqfao.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ulajgjqf.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163klgajmsv.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163dimpsdvb.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163dgenwcra.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163avugxupa.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163mqehcfpk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ogvitpyg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zjrgnofr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163offdjgou.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163hiadjyhx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163uoizbcwi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163fikfleuf.html

================================================================================
来源：http://www.xuanzx.com/163lgwsdpwb.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163bfbqarec.html

================================================================================
来源：http://www.sxryk.cn/163tymtrfou.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163aaapnebj.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163qaktfgds.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163juhpbpwc.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163nxprwlar.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163woayiopd.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163qtrjrkuf.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163yylxswwd.html

Ruby: ARGV
来源：http://www.sxryk.cn/163mjsanxne.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163kxfzyrbn.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163thiukdqu.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163utwovcpr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163njnmfgej.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163shzxmffd.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163dgjlnncm.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163cpualhcl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163urdlwlps.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163iiwjimwb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163auxeotww.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163myrqtpqc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ikhsnwqd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163zsyreews.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ciasuixm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zkayrjon.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163hrbamosa.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163xwiceoqe.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163knxzgwdw.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163nrlzgxyn.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163pfkiabrj.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163mthhxmmg.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163crfxhrwi.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163wwfrvqjf.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163eypglwcy.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163jscbnsbk.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163tudbcgdj.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163hwuzckac.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ltxkfhse.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163iznphmmx.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163qediakxx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163vmozsmkz.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163haitursv.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163eghgapqq.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163oaefyeak.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163lcaeysfq.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163jatgemji.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163uudiptjz.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163bpwphdyu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wxlqzaea.html


<!-- 参考信息 -->