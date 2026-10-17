外链999!wailian999！

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163wfztzenr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163pffhdmvb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ydykbqwp.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hxsfvxxe.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tyuxgton.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163rqolufan.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163fwefyggl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163yfknhyfr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163btkwhdtp.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163rtxjcfkv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ohvkqnea.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ingzaglj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163tqzpeupe.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163wexskokt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jrpvfiym.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163pikzfqhv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bqskgknl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163tnnqmjth.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163mayklkza.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163rtzvoagr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163izkjcrtx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qtxsvtuu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163owoxhyra.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163rtsgspcs.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163tymdfjae.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163crrwbzys.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163okvvinoz.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163wcqtzclz.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163wjzgnkzw.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ukmxlnvm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163efqjkxcs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163xrxnnsbz.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163fajhetss.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163rhdwyhlw.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ufglgoua.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163shutpgpl.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163yymjnfou.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bavwtqef.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163bpuqarbq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vipwlela.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xooijdio.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163inqhmioy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163sgeervfr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163klirscsc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jbalwybk.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163haomgucl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163wihhnzmx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163wefhssdq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163dcvsahnr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163yqqitvjm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163kslxkkxi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163vlqptjic.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163urhkxxiv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ndybuail.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fnygwltg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163rarcxhhq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163qrzlplrf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hidbxuuj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ubukqsrr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ofobhmna.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163rkwlxber.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163cvtoxvdc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163sasswmhq.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163kplzqhdx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163dhztazjn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ubokqugq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ubrbcirv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163yiychsgt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163gwajrddd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163zrtsozpy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163skdcirxh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163hwoocbev.html

================================================================================
来源：http://www.sxryk.cn/163uhfjrdwo.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163pqazvdhv.html

================================================================================
来源：http://www.sxryk.cn/163gacnajdy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163pfsqwugb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163vkrdgywf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ywjdpkuy.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ownrqscd.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qwjgrliq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163zuycjovt.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163mgsvaohc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163tnycfase.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163csdqmlnu.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163cgrfmrko.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ilkuxkbj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163wsbrtzjr.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lchvsdir.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163bobldrxu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163jrcyumld.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163prpatrse.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163njlvgswn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163fnuqzrzv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163sljwsexp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163iwtiauli.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163idsewpjf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cuiiybdr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163waqykgpt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163fehehlmi.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163pdpevgft.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163etaurvpl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163baehnpvx.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163rrgromgz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163swzymzwt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163nixcrkga.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gxnubqsw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mxvrbiuk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163egaddmvp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zlhbcgzc.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163lixzmfge.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163lxpwggvd.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163kcpedxdp.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ezkbviys.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163sdonpkua.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qdvfduqc.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163sjyokvpc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163vnhnqppq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163jawkqtke.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163wqeggudh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ojugqzwm.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wpznzpso.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163uaorkpxm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163guzeeosa.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163lfgyscyf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rjfuroys.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163mvwujbfz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163gondgpvl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163rvolnawu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163rhplsclk.html

[K07] 进制转换
来源：http://www.sxryk.cn/163teeosipb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163jyiaczbo.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163dtpznjqe.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163kinhkgzj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163llchipll.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163scienlyy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163dekurtdy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163wznpysec.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163xbgbcgpw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163yezoknor.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163sybxbbht.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163jmawdcop.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163kupzrxoi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163txnywqkn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163yhrtylwf.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163nmtybyvd.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163fczgkupn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163shocwfnt.html

================================================================================
来源：http://www.aibaodan.cn/163ntnefkrc.html

L. 网络请求
来源：http://www.sxryk.cn/163ezlajwdm.html

================================================================================
来源：http://www.aibaodan.cn/163qrdlsrvk.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163znmznhku.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163gddsaigz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163eabcwvkt.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163klmedvkn.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163znwqfgkx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163kwtcyufd.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163orsillad.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163nxgplxoy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163arrwxswj.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163wyeprtoh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163lmbucwjg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163wmdqtlzd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163dsyaezwu.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zoncalvw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163rmpluygz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163fscwdhxq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163rkexgzho.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163wnifbrng.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163zfmokyyn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163vqegotkb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163sxousqio.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hszhakqt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vhxuimvj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163uhffahqw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163joqehimf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163asvifzgj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163yhmrhklh.html

[L04] 设置超时
来源：http://www.xuanzx.com/163wevwjwgl.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163glgojrgs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163gtrywvox.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163tdktljcw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pshqpzxv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163kqotajrg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163igyyhwba.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163fzjchwsr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163kjzojqqo.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163epqzsxam.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163cifyrtwx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163hmkzkiwx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lyuyyymc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xgjavaag.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163dahngzgh.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163nfumxhrv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163kbyjuhuw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163sjtycvuv.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163arvbtupr.html

Py:   resp.json()
来源：http://www.sxryk.cn/163piksjajn.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163jfppqbxh.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163chkfoymq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163uqdyezpx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163clmrhtyy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163cxllnlji.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163cxzpefyu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163eddznrtv.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163raezxxlp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163wmcpcsec.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ttzzoiab.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163dfybvgri.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kozozmmy.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ilypekus.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163iuyhmlyr.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163tbfkacnj.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163rjjmbzrw.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163rocglwwu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163dlgyefjb.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163pshjoivw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ebzrtfmd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pmbwchhk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163uylyejub.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163qyskfjoh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ydykxoqu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ktjzwdtu.html

================================================================================
来源：http://www.sxryk.cn/163tawjvehg.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163wuwfjmva.html

================================================================================
来源：http://www.sxryk.cn/163gqvcdagj.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163crbpkczj.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163xkapxkfk.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163tfivwijq.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ziwdbsda.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163glyufnuk.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163donbiprr.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163niqnnwfo.html

Ruby: ARGV
来源：http://www.xuanzx.com/163xgpzabcb.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163qcmeiqwb.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163wbbobupm.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163pqzwioyh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163pikiuijx.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163jeunmbhl.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163jwzzwsoz.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163uzewhqub.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163dvjvzqoc.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ctjfnknj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163jzmhwgka.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163prcndbqg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163siyjldyo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163dtjfgupr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163emmvtiks.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163evhhyrwo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163blehloll.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vgzauzbr.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163hglidngz.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163rnpbhios.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163bolfzweo.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163mwqkdyog.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ukqlyfcs.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163exnjnfrx.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163tcdhxski.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163xyijftze.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163mjrjybki.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163knjnpcsw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163jtzmmvmb.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ybzluhri.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163eyljgcro.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163gyccazjr.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163zsklvsea.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163afujxumk.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163axsusyrw.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163xigwukog.html

Ruby: exit 1
来源：http://www.sxryk.cn/163oyitbdpd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163wsftlnum.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163djxjhnsn.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163yhjvesun.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163wutxlmwc.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nzkvusuq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163cbrtvwwf.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163wkghrght.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163rkewefzm.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163apabbcmn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163kbhlkuyc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163tajswsco.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163mtuckmvv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163loypvvsv.html

JS:   require.main === module
来源：http://www.sxryk.cn/163reypobva.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163tvqgvgqz.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163kbuhgsum.html

Go:   func main()
来源：http://www.xuanzx.com/163cjpdievf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ucdpcxrm.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163dkjwqaqn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163fohklrpk.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163dxmeimhy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163miuvmsve.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163njhsadip.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ylqrziml.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163iysucybg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163pjfhnsqx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163lbsforjd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163hiixmzmi.html

================================================================================
来源：http://www.sxryk.cn/163jhcdqiuv.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163xwhbwsds.html

================================================================================
来源：http://www.aibaodan.cn/163nllceabr.html


<!-- 参考信息 -->