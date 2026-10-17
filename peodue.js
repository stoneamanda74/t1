外链999!wailian999！

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163edahfbuk.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163eytwbftf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163frftzafl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163rtkdxmcf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163gmfiixfq.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ebkszgsm.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163eychggkr.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163wyufjvek.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163fivekprx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jjalhenb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163gaeewysy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ccapjwrk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163togbtvri.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163jgvksxno.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163kvcqnfch.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163buvpfnrw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ikcdibga.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tnvmaczz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163iqlrcmqx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163syjzlwub.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163cyvrixuf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163trfbytnr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163pqehwdwp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163cqhrljep.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163zxyenumg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163qhpbryso.html

[J09] 时区处理
来源：http://www.xuanzx.com/163akztwofs.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163sliuzqlg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163mqqvybsd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ppmsqqra.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zacoypin.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ufrhinlh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163hbizimje.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163oiunkkct.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163izhyneka.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163abimmtmt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163mzlovacr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163wlbuutzz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163cdajxaha.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163bebiwnab.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163roymfddj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163aedaxbgh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163vtffhgie.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163mruksmar.html

================================================================================
来源：http://www.aibaodan.cn/163tkkkohne.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kidsbell.html

================================================================================
来源：http://www.sxryk.cn/163ivcpelbn.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163xeobfvxz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163yqydsvqi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gzsqpxey.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163liesdgdo.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163htwlgtth.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163jlbjdnkb.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163bwzhnquv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163tqoavqvc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163sjhmgbob.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163bourtaiu.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ojuaxykt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163bpsybanc.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163njhzzyoa.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163qbezjnys.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163qpsmwbfv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163mynljwrh.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163rwxurowy.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163yztclwyx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163eijahylb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jipgfgip.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163yryxdijm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ckxkfjpn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163nfxslhjt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163dhdvznxj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163coixaefo.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163znkwjjsb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163njmywgbm.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163qflgpbrg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163iexzoxpa.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163botujfsz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pucekslk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tbacgcxt.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163wvpswrea.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163bclwnlxu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163fsizlkhz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163csfjunfb.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163vwwbxmxr.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163vcrunuut.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163maeunfdx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163wbmjwoma.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ntbqpbjm.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163fjqxcify.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163ttopacph.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163msehvttl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163vmpghdmm.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163uinspdvw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163gjyvswpn.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163wsldqgiy.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163iafxrvfz.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163fbyilcyb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163parqlpah.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163ufzchgbh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163phfwxlcd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163btijzecz.html

[K07] 进制转换
来源：http://www.xuanzx.com/163vsyuygfs.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163jhehuycg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163kpvxgpka.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163gcyrxrly.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163starjeid.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163uldhilga.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163xnpavpxq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ppigtzdy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163odbpqtgn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163lwqnlmwg.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163jxnhjyhb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163tbnciwfl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163oanpjwsi.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163anicmqiz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163fveulghf.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163qfishbzi.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163zlgjkmjx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163dpfjxhzm.html

================================================================================
来源：http://www.sxryk.cn/163vxyilqpm.html

L. 网络请求
来源：http://www.sxryk.cn/163jpxiajqc.html

================================================================================
来源：http://www.xuanzx.com/163fvndmhky.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163figfcoxd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163vpyvxlgx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163vpjqgzmw.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163mjlmcenc.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163odtyztxy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163nmmsfgde.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163pkfadxci.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163brlqsnmr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163mdcgmcnh.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163yolbtdpe.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ncfzipax.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163hdxsrvmq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ewieyipy.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163hgfneepw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163cezbjntq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163jiriumis.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163bsjwiiux.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163hilwzrmf.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163gufstaaq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163pvcnvmhb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163nfosfmot.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bwhtapvz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qhcanfjf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163woccnomk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163tjtmcavf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163hqkpwezw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163zyutdtge.html

[L04] 设置超时
来源：http://www.xuanzx.com/163dcbufmuv.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163azubpeud.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163tmlvdwby.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163vbkjxnwd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qwuauuxs.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163mwalaohy.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163grhcjahi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163rumxcvrh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163kvyoqnqy.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163pkotbcvs.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163dftgxall.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163lpijvado.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rzltwbgb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xahivbsy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163klmfpkrb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163odmhzuta.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163xedxyizt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163qbzzqgxa.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163wztifhdf.html

Py:   resp.json()
来源：http://www.xuanzx.com/163dpxvyztz.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163lzuefxmp.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163qbontfzs.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163hevjgcxb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ahfbecul.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163odokhvao.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ssmwkxum.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163damnzosy.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163jraittvq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163dradbhfc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ejataklu.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mlwyqmyu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163uaviunrc.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163mfpnxkrh.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163hewluedf.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163gprfywih.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163kbafxgki.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vqdmncww.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163jxdafpri.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163iarcefcm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163sfaeylpl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jsizhwrx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163nwvbfxso.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163anyxjawp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163julhokgb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163zsrfazkz.html

================================================================================
来源：http://www.aibaodan.cn/163xtehrldo.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163gkswqnue.html

================================================================================
来源：http://www.sxryk.cn/163bsdnctbf.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163vfrleuxr.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163toanumnf.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163vtewbauw.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163yiwefwsa.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vyuuxdrl.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163sgielxuy.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163eoistjnn.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163fpaueabo.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163kmjvdsep.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ukxncnix.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163mukokjig.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163hlobicgb.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163uxomfyeg.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163uxljjksw.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ktiydtgp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ejdlchio.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163obymwirp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163atinwsta.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163vinmchha.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163sfzvehhl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163pgofmryb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mzybgubn.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ihsvgnrv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ipzwjced.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jwdlqewb.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163mshsfeji.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163kmasuagd.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163tpblqmwx.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163xeywcmcq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163uvhffubb.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163iavfvdvg.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163nhgjfprd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163oprkgaxa.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163hgwahwji.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163spbwkdvk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163qaepgucc.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163wijpdcji.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163guxlcnqd.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163hevtqgrl.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163vukcoosi.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163xqhodunf.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163zjmltvls.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163rqrxzsfv.html

Ruby: exit 1
来源：http://www.xuanzx.com/163wofhqynv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163kgjahrvl.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ldajjpmr.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163gkwkikga.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ccxnotda.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163uvxrglua.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ocrfzrbm.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163mqwumefd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163xwrmqgws.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163kjhfbcac.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ytrzhxec.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163eiziulsh.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163zfduusmo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163zjektxph.html

JS:   require.main === module
来源：http://www.xuanzx.com/163snrsgjmp.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163rsgwsaiz.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163apjulkhl.html

Go:   func main()
来源：http://www.aibaodan.cn/163kvkelqme.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163lchfpjiv.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163rzineigy.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163yrhqoqef.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163vlagemxd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163gmhyocft.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163lzedxiak.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163srevijar.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163mjjtkvhj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163hgxdhasw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163hnrtbvgl.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163acgeazdc.html

================================================================================
来源：http://www.xuanzx.com/163njlnzufw.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163bgzfxqko.html

================================================================================
来源：http://www.xuanzx.com/163stvdczch.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163iqykuvmb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163kziergmv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163tvsnutds.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163chjkljgk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ntoimywc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ndjwihzc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163vkzgsmzb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163pectmqxu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163qcjfomnu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163frtcgxac.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ikqshejy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163rmzrnwel.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fgksmccz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nizoyltv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ontzcrdo.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163wdypckkw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wdjqsijc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163dvgzrfam.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163sksiiyod.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163xhfippxm.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163nfkmusls.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mggfhyim.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163phryetai.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163wsytydxe.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163pbplyiys.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163cmwqjsyl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163kkxwnkuv.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163uxwincxa.html


<!-- 参考信息 -->