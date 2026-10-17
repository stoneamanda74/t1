外链999!wailian999！

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bsxxlvpn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163tvbcexpi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ibptpbzz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ieqfmzln.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163nxqaawat.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163cgquymby.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163zycucztq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163qprolzho.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163xzfucvcz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163olxeccjq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kqynttza.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163iikgbcci.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163aojzbqgi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163nkolzmgy.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163nsejpbth.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163nhczampr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163qgphcrnv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163pfadafra.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163vmuncteh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163eicoelmg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163wxedyuqc.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163pintrfxd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163vxluhwae.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ljzakxan.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ybwdqqgd.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163sfbbpzpc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163gmwvcmnb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163difgdwdw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163olzhmxis.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163hbfeoauf.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163dlfwvuyg.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163eiorfknm.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163awflpnoa.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ywbctglg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163bfquuewq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163dqkiodsz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gdmcarag.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163oftpcmgg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163rryagsah.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163egalyqaq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163trltcjvz.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163kwonstoz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163uwnxcnfe.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163tqmvzssw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163thstnwpc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163wlrjwdcr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163tllposdj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163needubyp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163jojdjfis.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163fsgmdoqy.html

[J09] 时区处理
来源：http://www.sxryk.cn/163hjmgugwd.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163vievdbjb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163uqrmoguy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fmrymlrm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vakqixqp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163viucynkb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163depjiuzo.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163phmeuuoq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163pazdnmex.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163oaldardt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163vlqbzmsv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163kijzngef.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163fxvvsyew.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163bwsgrpwx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163barcdjyr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163sdcidgyl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163dsosdsbd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163wgwzuwfn.html

================================================================================
来源：http://www.xuanzx.com/163mhlioegk.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163npzsffvk.html

================================================================================
来源：http://www.sxryk.cn/163bkbpfzvh.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ovwiigea.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163vkmdzvhl.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jsfpapro.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lljbyqwp.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wdcetzyl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ybvlpats.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163hvcwdmgp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163lpgjkbpu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163jggdqhjc.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163vwwzngbr.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163njithjnu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163itjjhwts.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jrluennr.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ecgkpdrk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163jcdlgxjz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xpqpwjkj.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163sjfyxoou.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163laknwhtt.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163xxqnafyi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ppzsbnua.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zjfcecio.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ebuowpci.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163gasivfcf.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ntqrpxvy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163wtntjjjg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163tohqftuq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163whlbuogz.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163wnycwebv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163mlxqpkwq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ubnekjvr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ofklxveb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163sojztzzj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163xzutjfwb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qvjcqpxa.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163tzpfrjse.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163elxscwbj.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163dxdadiin.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163kylrigdq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163sywjfcjz.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163bycuexuu.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163glghytnw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163oosaogso.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163hhoraglp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qgzvxhsj.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163vgjvfhho.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163azadxere.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ldzpguaf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163cswyjths.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mwtxhbgv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163fkhhuotz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163sosstfum.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163zxxbtpdu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163deplewlr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163vdcwibew.html

[K07] 进制转换
来源：http://www.sxryk.cn/163pllehpqb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163lorlcnez.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ynsamapc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163altuntuf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fstxuykr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163dlwislgc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163csywwpjl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163eywzhele.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163swmmuhhl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163raxtlfxn.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163glxlvbtg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163kitrixkm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163chlxlakt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zdjkakxk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163zlasujta.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163vqnbdclt.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163baszdkun.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163zekxgqte.html

================================================================================
来源：http://www.aibaodan.cn/163soahrdjc.html

L. 网络请求
来源：http://www.aibaodan.cn/163vbuaxzla.html

================================================================================
来源：http://www.aibaodan.cn/163gallpoct.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163eiqmxkdx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163wpzvpkqa.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163oxpewyqk.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163uqievyzq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163idwesbhe.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163wtlmyoha.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163uzvbwaqk.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163xibriibu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ycedseij.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163gjgylimu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163arpdfxso.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163iptwcufy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163beudzkqs.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jlxfpuua.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163kfonpfyf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163qieqrcpn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163kdlhboxi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163lsoyotcr.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163eokyyjqu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163jhrdkjmv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163hlhsygtc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163spohqkwu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vtmsdiwa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163mnbwibzl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163yonknkjg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163kixkmgve.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163otflzspz.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163mcjnvmlc.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163wntjvrfe.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163dvbpvdbi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hdymeurq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pnrydptv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ubcixdtj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163kjmibvoo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163cykfqmkw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163kqjrrmvz.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163iwawzllu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ycjhvadg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163yumctvky.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163eomqtmcz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tniulprt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163hdvqttkw.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163gjluixpo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163oxlgnxdv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163vovwixpd.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163xvhuiepf.html

Py:   resp.json()
来源：http://www.sxryk.cn/163vbjgmzqc.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163mvmbwmek.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163maanscmk.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163icdyvtdn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163jodblwmy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163jctbsaxi.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163upbsqsaa.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163pqdruqnm.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163xxkzigaa.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163doeqopma.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163sgmxxymc.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163krndamtj.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cwoygyyc.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163plpwfser.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163opiwmbet.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163uwxnjots.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163mmglihvm.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163hvfedjxe.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163uwjzcqxo.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163jevryasg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163uccvykuf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ivvgpmyx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163kmpdpvhc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163dchiniqk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163oowrulyi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163hjpggulp.html

================================================================================
来源：http://www.sxryk.cn/163iacnkpwa.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163aipizwvt.html

================================================================================
来源：http://www.sxryk.cn/163txpgalws.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163kmsxuhty.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163tlypbwje.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163mpqnbkfz.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jpmzdwym.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ikkrkgam.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163wriquqty.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163psgmiyvm.html

Ruby: ARGV
来源：http://www.xuanzx.com/163lbkhsoiy.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163jreljvuj.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163hiuhrzlq.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163fhwgunqn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163jjsxgmqt.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ywjgicqt.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163tjhrfapb.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163mdfygneu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163xubzjtqs.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163hqmbqcsq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163cgnwcyij.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163pwjiwulm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163dpzvuspq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163mrnmmhnw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163szhcbmfc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dinpvcvb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163afwhagrr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163dovphajn.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163wnhmzjxr.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163rgswutow.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163pqexcqnu.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163hkwtvqqs.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163zflxifue.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163yrirwdgc.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163dokqhrle.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163kvuyyexg.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163larqcuhi.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163wbkfrgbv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163tlkhewtq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163lsxtmxxy.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ssxlgnft.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163xxrbrxiz.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163klwapnnf.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163idtsyzms.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163yjrbhgiw.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gonrieiq.html

Ruby: exit 1
来源：http://www.xuanzx.com/163pkmhrevq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163npzzyozl.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163gaekzndm.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163hqjbkyev.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163riasjgsk.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163buqtwxka.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163tkhfalzd.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163wxsfcorj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163pbimwnnx.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163wujpqspw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163nzldonsa.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163csylvysp.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163lwqaiyej.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163fhmqvisl.html

JS:   require.main === module
来源：http://www.xuanzx.com/163vmghyvzm.html

TS:   require.main === module
来源：http://www.sxryk.cn/163gzylklxc.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163mcffqdan.html

Go:   func main()
来源：http://www.sxryk.cn/163wrfneqik.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163fvznmbnx.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163bktzbakb.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163fxcxudnz.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163vykznmbg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163lgjydfbi.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163usoyvlhw.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163eyaxhqig.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163obslqpvw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163sxsbapnu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163wszyimum.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163yypypebe.html

================================================================================
来源：http://www.xuanzx.com/163vcsxtlft.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163dbvkglai.html

================================================================================
来源：http://www.sxryk.cn/163tpgncuhv.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163drgcwhzt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163cscbxlev.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163zogdetpa.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qckijhvs.html


<!-- 参考信息 -->