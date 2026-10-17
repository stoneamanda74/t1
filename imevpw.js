外链999!wailian999！

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163usepaazk.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163qmsboosi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vjwwidkv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163rmahwndl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163pfqlcerq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163kctzcpez.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ydbrzewe.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ihqeevlm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ddjoctyl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163hzqvtghe.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163lppigwik.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ftfrpdql.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163lhgwnual.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ijafuira.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jhkivakw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163vglmicrq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163auvvxfzz.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163avshwebu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163fjeavugj.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163vqppwaki.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163uwbbcgue.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163gzckhvxc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163migptsaf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163mdfiaqtd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163qrsmicjm.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ddjqnfsr.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163bhynlnvd.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163snootmit.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163mrljixmc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163orlopaoi.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163csjwdjbf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163cfhjnurv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163mxaueplw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ounhsywm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163assmasak.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163exrbrtuv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hckveqeg.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163gpifmroy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163lbnyvjsq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163cyazkgsx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163rbmyghmk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ahhpkrak.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163bjayuwhp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163msgsvuoy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163maklkqpp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163wzqbrdet.html

[J09] 时区处理
来源：http://www.xuanzx.com/163qatrnwqv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163sayxdvcm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163zcglnayd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163yklsmdtn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163wlimwatf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163foujkual.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163yazfjwpc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163evhopqza.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163bpnzishv.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163dhutlvuf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163wpfdsztf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163bpxbasbc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163muftnpvq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163lwggwqmc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163krowbxqy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163frtscehk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163xtebtkcv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163sqpcxxqq.html

================================================================================
来源：http://www.xuanzx.com/163fvuxfflm.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163xnrmzpsc.html

================================================================================
来源：http://www.aibaodan.cn/163elzrgysl.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163vogzplmw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163tpqncpon.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rhcosofb.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163makggbhu.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dvqujexw.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163nmvisfzd.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163vwlfdhoi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163zkisedni.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163yblnjxnh.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163gphtouia.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163trbmpqcl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163eccchhyh.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ecyrrihx.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163zxvlfvbk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163tcmdplhb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163cpbhlbks.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163nufswiza.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163gjzkmjha.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163cizobgkr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163xpysbalq.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vmvwljvy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qcraygdd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qxxpryzw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163cxwdbhcy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163hrskhtkr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163nfhljugm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163tfamxiue.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163kfavxjqr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163syjiiffk.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ugcmagri.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jgiqqajs.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qodxqgdw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163eserzhof.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163etdccywz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163hrfwnwib.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163yyunjleh.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163hrjbcgfx.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163sgsdghlp.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163knupcthg.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163frvsxldt.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163esishevw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163xzbdjoim.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163cxwsdbbr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ykfcvkgs.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163zxseavsf.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163jsdyijev.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163rvjnepep.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163cgsdtytb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ulysxapm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163nnalrhby.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ppqvehet.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163qvfsxyub.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163uscpqjqc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163qebaokjd.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163mqczkjpk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163zitjbgpb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163irhbqfqt.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hpqqecgs.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163abihkdyt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fbuusvuk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163xxbvcvsu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ygzcteqo.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163uttuabri.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163goyghvfd.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163qcgcpwup.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163vkvatids.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163tqbcboyc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mtokwysh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163isqxsrbn.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163tjixkoun.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163bjnzeyez.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163rqxfgfbf.html

================================================================================
来源：http://www.sxryk.cn/163sbmywxeb.html

L. 网络请求
来源：http://www.xuanzx.com/163loefzjtc.html

================================================================================
来源：http://www.sxryk.cn/163ngljwgod.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163aezdgrhv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163fhupkcuj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ygeekbhl.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163uzjejwrb.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ijkuqzxk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163remmhpin.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163eywxopym.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163hjqkhnjw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163vgnhpedu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163cvdostxr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163ivdxzcnt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163tzxrysre.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zyuqkhbg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163eiyddadz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163dnvnuqtm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163kccbyskt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163hjrqflti.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163pcpwunez.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163evgtwipg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163xhxgnsrr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163xpoaeayp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vaizxabd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rkqarubo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163jalqpquj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163uibimxix.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163qciodaon.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163qmypmamt.html

[L04] 设置超时
来源：http://www.sxryk.cn/163uneolqmz.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163uhxopkgd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163nzfsetbc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163frmsyzgh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mhselkjz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163bdczhgrm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163rfgqhnyc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163saphmdlq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163fwvscudw.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163affhrwqs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ezlqkkim.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163fsrqkcfd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163cmabzsdd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mcnfdthm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163wqlcdgpv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163luqzlrkq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163yachegiu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163slnotvoo.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163sakdoqgf.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163nuywsild.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163oevhupfq.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163czdqnatg.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163nsakjizg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163pezkewuh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163olboyucb.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163fbhvgpxg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163txzelzbe.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163okjzgbhs.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163cqqfjcjr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163pmnyxhmg.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163lhfkzxnk.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163htejerrv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163bjhgairv.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ycawlhmy.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163nirwcrkn.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ukjhqhru.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163edfyqyma.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163xkirbrel.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163tjjhzzqp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rgssmsxs.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163urlivuzj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163zlpqbjqn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ehpippcw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163tzxnrvrc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163bzxvnddt.html

================================================================================
来源：http://www.sxryk.cn/163jmbgkvnt.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163qihxzqme.html

================================================================================
来源：http://www.aibaodan.cn/163qdsvyjqm.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163xpsmicih.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163lujfgsyx.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163yvunjpee.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163puxyoxlf.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nblntucn.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163cucvcbys.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163wgtlqysh.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163crrhuvyz.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163kjzgtuhu.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163dttzojna.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163zjpgkuct.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163pcwduprv.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163vgtewjvo.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163kiiwlzge.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163byfuagsh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163umjgdoso.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163arwslvps.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ttxuxymy.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163etcjrgls.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163gjssvcrt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163cqgumhyp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ihmfhure.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163cjwsaueb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163gvparujw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163auubjmil.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163mwjfqdck.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163wbezppck.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163hwktoork.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163oqfykkxt.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163tefadier.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163wnjwlbhg.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163cdbnrhiv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163aeclcflk.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163gmoqigua.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163sgbbmhkk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163nyeyqmyy.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163tprqkupy.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163uomxntzv.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ggxeqhnn.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163uavrglti.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163zucdkesr.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163nnzeopet.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163eulzavsv.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163nztfodvw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jrcklrib.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163hvdjrjzs.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163liivmxbv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163gvatkyrc.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ffvbcyyl.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163vlmmhpyj.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163uzrfqlju.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163imxsqmoh.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163lvtzklll.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163mwekewad.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163yspalaev.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163bklfunjw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163pckdqhzs.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ssbwxqzf.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163hyewqmkg.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ysfprhst.html

Go:   func main()
来源：http://www.aibaodan.cn/163bgrpubmg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163bhuuntws.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163qesnktdc.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163vceruofz.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163akkexwli.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163qvgavjrw.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vxmlcblz.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jzkwpoxy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jqgredev.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163vdiqhqaq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163uemjnqdg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163twamnvqy.html

================================================================================
来源：http://www.aibaodan.cn/163ussoousd.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163gjiimfsm.html

================================================================================
来源：http://www.aibaodan.cn/163jbsydwft.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163lfjafihn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163jvewlzds.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163bcqnefzk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163owjhyfrx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ncvpjzgf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ieptpaqd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163cgknwtxu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163bnosgjrd.html


<!-- 参考信息 -->