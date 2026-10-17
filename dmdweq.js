外链999!wailian999！

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163vmroykey.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163zisincbz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163vimphohn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163otnvboig.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163vzjypque.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163exwykkpk.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163hfllhudx.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163qtwiitjh.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163tzgfzvgq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163twenkbps.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163cltfxato.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163vxvulpda.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jxzdzvhl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wkdiawjo.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ltgomqpv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nntrwski.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163degcpclh.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ggpplzkb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163fbqntvxg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ywqiqktn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163dgxkmpqz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163aiglhcau.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163rgantexd.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ssdewteo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163anuynuag.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163kpdmbyzj.html

[J09] 时区处理
来源：http://www.sxryk.cn/163gyprcqrs.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163slgmzusu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163xkmsphef.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lqsnmslm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163iukxbecw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163rvreptbb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163luvfjroh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ahxwqehm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163xejcwyuy.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163itaouqpp.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163iptwbfqh.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163gwvqskfq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163uzricbxu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163iujumgnz.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163jxgctmxe.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163stmvrwhg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163fvjkoxzp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163etqpwenk.html

================================================================================
来源：http://www.sxryk.cn/163suycurmz.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163pokgrtxg.html

================================================================================
来源：http://www.sxryk.cn/163chemltxl.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ntjtrucm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163uzddhwna.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rgggpujc.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163lawazgyx.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qhvrhvyu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163jhfgdzpz.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163zspzsxlm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163vhfygxcm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163jkyucadc.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163lcnqqouk.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163mxxctysg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163csyfqewt.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rjonriad.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163isqhzasy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163cgrakvui.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163eikqbcfg.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163kvzmvttx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163pgditmlq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ziuqvpdl.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ogtifdsz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lvbgltio.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163iosjpxdh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jibbiwnx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163prlipzoh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163mlfkkpar.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ouvubhdd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163faljwavl.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163csjvvxaz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163filcctmx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163aacrucuv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163lcsahiqn.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ctvxgccs.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ogbuinhc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ngaysqxx.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163shjmcqfd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163moysoinl.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163iontmvfi.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163jirhnsio.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163yiqrjgma.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fgedoqpt.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163uqwhwtuy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163nwkoxcgv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163bezznici.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163oqdtcdkv.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163fpjrsnrp.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163bqqigtsa.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163ugykyllf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163egmwusgs.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163kzpfcmty.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xuovwfcw.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163nhssicks.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163wczwywlg.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163mjixhgze.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163bibenyxv.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163nhcwrssw.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163vohjyfzt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ppuvyvdw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vrajlbkb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zcefivny.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163uwonllyd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163vqdhrvuz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163jsmagbkp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163dmexkddh.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163boruxong.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163cbwwbkvk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163emgtgert.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jsxsqzax.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pmhllgze.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163xcrgwvkg.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ffxorenj.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163rrllbilh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163dgosvaxy.html

================================================================================
来源：http://www.xuanzx.com/163vqlxqdfb.html

L. 网络请求
来源：http://www.xuanzx.com/163ejhiiogy.html

================================================================================
来源：http://www.xuanzx.com/163trgcvgzd.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ocpfvsyu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163jweacawh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163bavxbruv.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163frcitnwk.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163nuwplnrk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163zlmyujvk.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163hmscwtjz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163reumdsjq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163qjzhsqqo.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163wskispqa.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163awmasbmo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163qdgvkoax.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ueqnnjjm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jlvkdpgr.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163bhxyozkc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163gmdallhg.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163mjvxqnlg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163nfdhunlq.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163zszmyuls.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163nbehvswl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163prmkimuq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163stgqwtvu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163muyrckzj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ticrzjwo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163bhweuxzd.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163tukjogzl.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163bdzrexad.html

[L04] 设置超时
来源：http://www.sxryk.cn/163qxludzcr.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163qparjups.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163nrivcfby.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163eygznhdp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hhtctvao.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163kojsnhhw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163kyzhxxhs.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163lubmnnmy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163tbfppadt.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163oekrzlku.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163siafoxrn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163mmichtjm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ovnhkyyi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qiydpzmd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163vlttkajz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163htbceybq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163dzldrqol.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ydfiydft.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hgqnunqk.html

Py:   resp.json()
来源：http://www.xuanzx.com/163kvodvaqs.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163fauofyjw.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163cihlsial.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163mjumdwqi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163lndbujkm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163brnmpknc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163kflzuiuj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163dmmqqkhq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163pkadqssw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163bggfkkuu.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163lndqwvwr.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163dcxxntft.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163tnlgjjsp.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163fxjjngro.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163lwlhniqr.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163wowigjfs.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163zkhpyffo.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163tzservgg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163lfkuovfa.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163jvzmawtf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163sstdnaps.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bqsikqxp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163mtlwqfla.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163jemcuruo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163jakdhcwr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ebxbjqbh.html

================================================================================
来源：http://www.aibaodan.cn/163xjzdemti.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163mzhewqjy.html

================================================================================
来源：http://www.xuanzx.com/163ksfykvzl.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163cvivqhnl.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ilispuho.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163bckhkcpu.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gpwzszks.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ncbtixfb.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163uhiahlgm.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163fzilnewe.html

Ruby: ARGV
来源：http://www.xuanzx.com/163wdfmsxie.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ehfwuikh.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163uajmyrke.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ezuzuvqe.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163nlzkgvfh.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163legwanxl.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163hvuhmoxz.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163bdgnvlds.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163rawjqsuy.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ttyjbnvd.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163wmzgerkx.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163suczlvyu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163bjnbnacv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ffvygyru.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ioiiwrix.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fnbjypfi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163xtaljqhx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163gjrzsvjp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163mywhcioi.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ivgeukma.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ubtdymft.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163qkmnjyms.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163vxkjgszs.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163acvkkaus.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163lawwgwxb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163zqoxvzll.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163fxoxwuzr.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163hjuiirez.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163nzuhiulx.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163kcqxqmxg.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163rawoqbnu.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163pejihanj.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163pwpewlqu.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ltbjmogg.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163skhqyive.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163yyrfnxsn.html

Ruby: exit 1
来源：http://www.xuanzx.com/163gayqbmbb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163xptqdzwm.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163xeviamgg.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163dzpmjmym.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163hswusdvc.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163wcdgdipa.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163moeqaeog.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163bjynlrxn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163tfmkpiqn.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ihfahduq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163xpwmftfa.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163lqpvpwxk.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163fbkiyihb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163dznombqf.html

JS:   require.main === module
来源：http://www.xuanzx.com/163acbmjkli.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163lsylkszu.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163rmacmwyp.html

Go:   func main()
来源：http://www.xuanzx.com/163jiomlrtw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163yfkbtfwt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163hghfgzmt.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163qipsfwyx.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163uccvgdgr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163nsqsunmy.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163eylpqkdo.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bwouuuzq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163euemvgbk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163bmowyelr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163tcsnruqu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163obaqrgtr.html

================================================================================
来源：http://www.xuanzx.com/163lfjeqzoy.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163hvoksfhr.html

================================================================================
来源：http://www.xuanzx.com/163ecdopqwk.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163rdntcmrq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ebolqezv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163zhhazscw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163wrhqomfp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xffenogd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163xezlusvr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163woutvqge.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163kcmbrdxd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163iehqihbt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163optxxbnf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ctyxcxwa.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163jlsfovqm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zvkpfjso.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163noidegbo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163xvqbjkku.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163pcdeesxv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xjqlfift.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163gfflzdib.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163wtdipzag.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163umxpwhae.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163bbyqqufl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fsnpvszc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ujondmcq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163lojbqhtn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163fwzjqmqa.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163afactxjd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163nfgiqleq.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163vlfxqbrr.html


<!-- 参考信息 -->