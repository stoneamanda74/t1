外链999!wailian999！

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163xrbohxqf.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163zolknyfv.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163zpksfncy.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163aergghzi.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163tigwxdly.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nvplkiyh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163aaviilxn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163bbmefysc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wqndtitn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163meuzvqxg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bmdrswhm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163igbbezak.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zmuofktd.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163kqadevjo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163dixxxdyl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163qxprcxde.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ulhnjoca.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163etuieroi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qjtdxiyt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163fofpkevd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163jxuvurgq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163tjlhtyfx.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163papsdmzu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163gvhjesks.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163msawemgv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lwumavat.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163afhqdjak.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163dynolgir.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ikbtsqaq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163jpxaicyl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163cgepwwrd.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163fqipmqnk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163vkygmdmo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163docqyafn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163lolfmcnq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163wqflzsdd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163pasvcaeg.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163njpkjzrh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163axqpwmba.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ytpkalxt.html

================================================================================
来源：http://www.aibaodan.cn/163yzpcbvqt.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163xggnlefl.html

================================================================================
来源：http://www.xuanzx.com/163zenonrdy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163dsuwjcnz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163xnmmkgtb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jecnqton.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mfwooxti.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ylqhelpi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163nxqenxxo.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163iqumpxlx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163crwlctul.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163pibdlwfe.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163pralzzwk.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163xcsmjjsm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ckixwcqq.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163krtxkfkg.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gycaifgk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163udthcqke.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ehpgonra.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163dncxffld.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163gzuulpmx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163kafcxunt.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163qtkgwxcn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zfaowmyp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ucqbbpma.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hihftfqj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163imziholb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163ekvygadi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163hoxupfdn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163rcqxmppi.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163vksuynfu.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163pddnncyf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ybxvtuzt.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163irjkiwdd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163kampnwrn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163wyrmrpea.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ttrcheki.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163tfzlghbf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163tbadwewk.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163exhypxav.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ulfdczha.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163fozvdkam.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vmwzelhh.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163qzfpqvfi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163hqmqekyr.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163rwvbyrxy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163gplrysjn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qhytedhs.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163syoznubb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163zviiubaf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163jqmihtvw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qbszyxfs.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ryxiohwt.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163kvskhrcx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163gbpovmgz.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163zuvlgjru.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163mujbbasu.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ashlzjnv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163xdgzlkyr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163yhjudlaq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163rsercuij.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pjfikupi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kwcepdqk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ccizofhz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163msnoyqes.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ynkyndyt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163cxfwairi.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163akybxxil.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163yqcosbpy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mgsdrsdv.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bkdhezmr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163lwqlfibk.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163khoijgbh.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163notsgclj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163pkdcifyz.html

================================================================================
来源：http://www.xuanzx.com/163qmqhzjkf.html

L. 网络请求
来源：http://www.aibaodan.cn/163sffbsdpu.html

================================================================================
来源：http://www.xuanzx.com/163zlvsesvx.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163zzbttaeq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ueeqgzzs.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163iynvnuzm.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163mubpmkkp.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163aldsffyk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163hiwlpdrh.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ebyybgms.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163hofmxcjl.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163tzvmdoiy.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163xykqrwid.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ptodwubk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163syjaufgt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wtxzytfg.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163oifeyfiy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163uanodwfc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163smwwzdlx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163lrofbrib.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163yvgilvkz.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163oibzfskp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ppzrtxbp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163kabffgld.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dvzmjuha.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ssukpcrs.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163gvsdmsek.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163yzeuvszq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163aqkxbcvd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163gdoidtmf.html

[L04] 设置超时
来源：http://www.xuanzx.com/163teznrccz.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163pheyzlpa.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163xxmsfpgg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wenmqgme.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163rzqcstni.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163uokgfwvh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163huwedbvg.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163ucnjvgob.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163zzghnven.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163pnapigyw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163vfmwzkym.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163xwpxstvb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ctcpncpy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163lkiewhbx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163lkcwwrpr.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163zmrpelfc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163fqalonzb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163rbwpaziu.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163allrwpnj.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163taivzoaf.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ewvpdofo.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163vmpzcnwr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163wbraplnc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ngoexpdb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163kfquzgqt.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163xrpweyfn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163keciugpt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163vwzioerh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163lxpfizos.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163nqyudypb.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hesfeolc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163uclqkgxs.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163uuydknmw.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163qudeuixi.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163pblpjpzc.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163zaeluevh.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163iidzsxdk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163wqscrsiw.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163dlvjvjne.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dlolmnli.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vjrjgxth.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163pvhhluby.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163lptglork.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163xbvqnepq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163mvctifcm.html

================================================================================
来源：http://www.sxryk.cn/163vvokmdpw.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163paxzldtx.html

================================================================================
来源：http://www.sxryk.cn/163dbtlfqtq.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ctaivhri.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163wmcsjrka.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163hvhotjqm.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xakgqpwy.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wbsjzibi.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163unsmeqgx.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163kkmxfvsh.html

Ruby: ARGV
来源：http://www.sxryk.cn/163mtwxacaj.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163bllrqteo.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163pmncfqkv.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163jancwpkm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163iytlgijy.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163wpnljkxx.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163kuhokyae.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163jrozqfuf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163eyodecdg.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163dfuypldk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ekfdwaid.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163orkmflrg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163iqhdjoda.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163unshhflm.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ayndkckc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uwwzwivi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163wcanvkvj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163nympbxbz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163hlqgxlvw.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ipestemm.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163perzavbk.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163flpdjzqw.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163emuozftf.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163yeomzqqe.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163vwszdzdj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163qwolsvtk.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ktqxshnp.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163bvqtbgbg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163jrmbujii.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163yfxmrevj.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163tiezfwnn.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163epxubvrd.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163owcetfqf.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163nfukwugq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163xesgzigw.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163aogvcmhx.html

Ruby: exit 1
来源：http://www.xuanzx.com/163jeuuorsd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163vjrtftun.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163hsjxcorp.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ylttzxks.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163zlfipkzr.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163fovrhpxj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163evsltghf.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163sxgfqlvd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163qliybwvz.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163kkdastqj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jjfjjsnj.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163jsbbhuno.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163pjoegbjp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163gxlvsvro.html

JS:   require.main === module
来源：http://www.sxryk.cn/163oizyrbse.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ttxtgovw.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163pelxxses.html

Go:   func main()
来源：http://www.sxryk.cn/163dlhnxslf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163xdanfwbl.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163czfhrlii.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xmrnabaw.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163tvlpdkim.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163mnxuscnd.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wuelrfdr.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163prulhpuj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163xwfdilwi.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163prrrjbes.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ermtbyro.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163cswbbokf.html

================================================================================
来源：http://www.aibaodan.cn/163octuqpwu.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163mwprjobz.html

================================================================================
来源：http://www.sxryk.cn/163tnsticdo.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163kuuuhstg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163jzsmzlqa.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163knjbugkk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mjvpjctg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ibysjvyo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163vnnywhig.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163mwjhjozw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163goktqcvw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163otxhcmuq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163xmwyorqg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zgethbkf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163pawkdkej.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163obkjirtl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ejvwospa.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ggorpins.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163mxazipgc.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mbcjzekd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163olqftlec.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163jhhlajdw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163dbxvtjpn.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163nycnwezr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163swkjqkrs.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ncncxder.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163efbaogog.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163bsiowdag.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163nwxcckwl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163enddiofp.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163aqactrbw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163uvhyospy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163onjhyfzg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163kcaifdas.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163amtjrsxy.html


<!-- 参考信息 -->