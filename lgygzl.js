外链999!wailian999！

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163pdysizrq.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163qtszsgst.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163zcokvndw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163rqnqtiol.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163rtrocbtl.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163yzdxhapz.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163zpkukitc.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163pjogonut.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163pqpvjeig.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wlbpoxvp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163kxtvmxpa.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163kfbvazlm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163geiuolwt.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163vwotagxn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163wucskepf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ehijwyry.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tcvukukt.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163zabzdaey.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ezngxwjm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163hhbrjmso.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163aliqpexu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163jiwuudwm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163uihfhnxi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163obxsqbrg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163sorqhvee.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ujqtxwov.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163jsojwuwv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ftbfdgvm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163oqkjjmzu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ssqzfdop.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mruumzyf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163gznihebk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163zungdzyx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163nfjpbjak.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ovpqmgla.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163fxvilgsd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163qyjywakw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163pasymsgc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ulddjvzf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163yzgettik.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163yfsthihz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163agtqvtgg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163bkazctzp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163lwsekjrn.html

================================================================================
来源：http://www.aibaodan.cn/163xhrclxly.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163tytprdhw.html

================================================================================
来源：http://www.sxryk.cn/163gqsqqctf.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163qoyaqnbj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163zazpfdpa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163gflciruq.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163uoyliubm.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163grndodxg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163cngqbekf.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163kfshqwfn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163aofgswhz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163efulzwbv.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163igkufoeg.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163hqxytvyz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163hlhlzigm.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ccqymgcm.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tyhmsbfd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163kaavpwxk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dfsfnynr.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163yoqclfla.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ysmhmmac.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163xjdadrzk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163oepzukvn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163bpawkaae.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hkuelbvg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163klzxsopp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163oclylspx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163mdgnzhnl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163gnmaxyuy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163tnbkpfcs.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163aswqlojw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163firttnii.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163fkxgzgco.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zotouwba.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vhodqdqh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163gsvygtpu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bhfrufkx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163oadbvibl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163tzcugbmk.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163mizcdcwe.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163otwofdib.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163rfnshpqs.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163zovsmujz.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bazvhevj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163xzgzpyqr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163kdvxtkgo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163lvxewbnt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163lkjqcebl.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163znycgzay.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163rqbxgmho.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163jmanusut.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nnzvmhps.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163qlysiyqh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163csyllpku.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163qoybnnys.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163oflqsydj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163kilqawtl.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163bwqmpjcj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163eozoyvwt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163svksczgb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ufqnksno.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163imzgpqma.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163oeznxlcz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163qfsjffmo.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163vvrkyywc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163uyufgqwa.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163lhqrumax.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ehstbsnu.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163zuriufcj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163brkenzhu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163uzficpje.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163urkxwckn.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163pzfilqce.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163iienhsel.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163qecyqkyv.html

================================================================================
来源：http://www.xuanzx.com/163wqqijpbh.html

L. 网络请求
来源：http://www.sxryk.cn/163viyjfeqd.html

================================================================================
来源：http://www.aibaodan.cn/163lcfqldhy.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163kkpabzyz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163inmpbrmz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163rkzyqmrl.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163hbkmpwdh.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163kbnorzyn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163zleqmimi.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163mrvluytu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163vkflofxr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163vuejnshs.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163jhxtetno.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163nptvdnzj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163qjqqadzr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tzassyuf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163liynbqif.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163wcetjfsb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163irnnlrnt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163puumjots.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163fcpllpej.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163hvrcyyyg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163zouivkcb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163siewskkn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163trzltvvn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zybeiqxd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163njsgvojd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163eorekqye.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163psaorhvx.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163rxoavdrd.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163txwontdu.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163tpimpfez.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163gypkeuxw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ryuicmxc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dgocfdla.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163dsvgjxvz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163cmwfofsp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ytignhqp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163qznbmzaj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163vlgldruk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163delphkvt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163bnolenpo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163xcowmcci.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163afzxurzx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163raalulkb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163gdfxjkzo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163efkwbsny.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163sucuxidj.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163bewxndqa.html

Py:   resp.json()
来源：http://www.xuanzx.com/163rpkwifiw.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163pyluhujg.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163qlcwstau.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163teqklani.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ypssrjnf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163fysotnei.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163nahmtsjg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ipvwcqyk.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163aidviuhx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163duqevdyk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163psecejqq.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163qitqfjxp.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bqbwvzrg.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163hjjpfmfa.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163jmoprzqc.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163cbpxrnha.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163flcrlyte.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163hjvcweqz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163cnwbrofz.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163grpdccoe.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mwrvvfud.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wpkovqqr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163xgjexzat.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163uvkvscqr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163hasnzdzv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163poiquqoq.html

================================================================================
来源：http://www.sxryk.cn/163gkduifue.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163hjplmkho.html

================================================================================
来源：http://www.aibaodan.cn/163jysfmjrv.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163hnpivlgc.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xojbeksm.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ggtnwivd.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163asjbhdzr.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ssbjvzhv.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163cbuzafab.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163qigunvow.html

Ruby: ARGV
来源：http://www.sxryk.cn/163giusulep.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163mwsjvmqu.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163wtzeywup.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163huhrhpke.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163yxncxtih.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163jfluxhat.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ozietdws.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163setcptgy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163hjybuhmu.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163lnhpwxow.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163qhxvgkts.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163gwukssog.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163lyxtugyi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163vxzygcxb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pvzcusqp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ntkmeisp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163waaeubih.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163mjaijuai.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163zzomprtz.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163qhixxflz.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163abfesigd.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163mbqrjtax.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ohuvqmwf.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163yltnyzrv.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163wjdvmopm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163kqhmyvvw.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163mgijsgqa.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163svosseuc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163oualsufu.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163tldmqpgj.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163saphfjms.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163kkyknvlq.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163sxyamwtk.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163aflbdvry.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163pcguprlb.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163thtpnddo.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ymogaaxn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163qmcmxmuq.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163iwzhhtfn.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ovwbxiut.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163oabiouhw.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163rvgqjbjb.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163rrxcaacy.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163eufvptsb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163yxfejgvp.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163eqgmbspk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163mxamphxi.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xeexkdjs.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163mpqjnbml.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163gklcjquv.html

JS:   require.main === module
来源：http://www.sxryk.cn/163yzkstmut.html

TS:   require.main === module
来源：http://www.xuanzx.com/163vznpcsis.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163bntvgmbm.html

Go:   func main()
来源：http://www.aibaodan.cn/163byalunke.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163aleahbnu.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163hgwxmwxo.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163slubmgjm.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163gmjpouyv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163expzhcet.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163fqjbpoxc.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tmudorgz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ynlkplku.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163cpdubidy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163oswhwzsc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ltywmzxf.html

================================================================================
来源：http://www.aibaodan.cn/163cxtfwlvk.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163mghzynvh.html

================================================================================
来源：http://www.aibaodan.cn/163bclreguq.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163wxaoychp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163bfifhstw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163vkbggxba.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qtghsbdn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nwbzjvtq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163qgutrmob.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163zzfwpnqm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163zmirsixm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163herocbqe.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163wppporgp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163zhdwkoyb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163qxkplfye.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ebjmqzbc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fxvgnyjr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163gjglwzsa.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163lmzasuem.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163aqkprqrv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163myjagwid.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zbwcmuow.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163tiykialm.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163qxssorqj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163hvjqaxet.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ojdjvaqr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163koukaclh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163kmdocftn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163rtasbnxu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163strajtwy.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163nxmrftrc.html


<!-- 参考信息 -->