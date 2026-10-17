外链999!wailian999！

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163beukffza.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rcdlvped.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rvfhlwvu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163gztqvzut.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163mcnjsvwa.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163epjrltjo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163xucafatt.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163zikdqvay.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163kpdkzfuo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163nqgonamb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163rfvqwaco.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163xbgypfdl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163tcoalmun.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163fgyvlqxk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163rccgqgfa.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163njrhxrnm.html

================================================================================
来源：http://www.aibaodan.cn/163gjzftmwt.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163donhykon.html

================================================================================
来源：http://www.aibaodan.cn/163lzvwdguz.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163jbyhkwra.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163visrkayj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ffrbcdpb.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wdjhglge.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163djpwgeaz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ijaslaas.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ssczmumo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163yvemsrxl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wfwhdfpp.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ucyuojlk.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163cqgfwzhp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163yqaqbntr.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163smbkcnrd.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163viwonzcg.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163pljczlgy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zkccxobl.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lnkdfgzo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163mltjloze.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163sadzfzhb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ilbrmqof.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163qqorbbqk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163bdqemwwl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ubosclsk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163gghtyoip.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mdpmmloe.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163jrppbmst.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163tfxodcfd.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163fvgtpmgz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163sdkkbnjc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163yigfkucv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rzingnnc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vaiwstip.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163kvhgbrvq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163oxfpneom.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163lmraegox.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163jripysxq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163uzzbgjxc.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163zptzeyza.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163pmbnmcpy.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zuenhobu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163cfscesgh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rmtkqszn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163qxnbsahg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163zryyztco.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163okrohlcs.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163jxlqqorr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163muctfscg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163adgwqrzg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163cjfjcvwc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163fkqafgfq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ipdtipzj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163rhuwyhfj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163alijbzws.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163fuzrfjrk.html

[K07] 进制转换
来源：http://www.xuanzx.com/163glcdxiss.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163tqeammck.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163hhvjajxk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hkklllkr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163gryyvrvu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ngzjqxqs.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163oxzfuybk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163onintcqv.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163tfrqkvrp.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163vnqjtfta.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163tepdgpao.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163fvvnutse.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163jirngaod.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163tothfude.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163zowubpgg.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163bimrmqdb.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163hehdgchn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163vjmdxloq.html

================================================================================
来源：http://www.aibaodan.cn/163vboarnrc.html

L. 网络请求
来源：http://www.aibaodan.cn/163kjdsanla.html

================================================================================
来源：http://www.aibaodan.cn/163wpsaffki.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163aahkvqgt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163mxtxtrwr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163nblkvump.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163fncmxtat.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163hdbvqkwo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163rsvthyjj.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163lnyudxxn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163qpkiowum.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163uckfxiws.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163udzzxgyr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163vsbydjbw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163nznaqcza.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dojurgvj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163iycejrbx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163kgfztyai.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163xubucokm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163qkuoosjh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163whztxsky.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163urnavtjr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163asyybvuo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163nofbiinf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163oxhdfdae.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163hfssognp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163gnhfosac.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163tjfhxigs.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163fqitecyo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163jkhxbmyz.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163vlliickv.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163kglopead.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163slandeyd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bkevoube.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163gxeoimar.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163qyhnerxb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163kulmlfcz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163myyrkxta.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163aeuoghan.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163cpbbewip.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ljshpmfp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163vqtchcpl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tntcsrad.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wwneuidh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ebtoyyde.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ragnwqjp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163cjacjbhe.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163bxncibho.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163xbefmesd.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163szwomztr.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163unqxacvy.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163meevdzfr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163phomfuyo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163bfzrozzd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163umiwaxbp.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163zbnzdfko.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163gtbctqqm.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163eufnrqta.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163lsfzufps.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163zpbhxbco.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vxxxunqm.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163khtwkfnr.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163afnfuymt.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163xdepdzpz.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zlkcqzbq.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163nzgmzbsd.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163dcouwxml.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163nymdfjuy.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163pmndmwjn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163oquiblxs.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163iwyniedh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163viifgvze.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163mcxfqzfo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163iiemjncx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163whfhobhp.html

================================================================================
来源：http://www.xuanzx.com/163htaxzlxj.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ckjcnunv.html

================================================================================
来源：http://www.sxryk.cn/163nnjhhuod.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163hzczefkb.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163jvrpqucp.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163jjpggsrk.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ydldlkxl.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163hrqthoik.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163agqroyor.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163cxyvvijs.html

Ruby: ARGV
来源：http://www.xuanzx.com/163sskkzsei.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163zgiaxdci.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163abjzuuzu.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163mzhzmawz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163cqjurmod.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163zyvdbazp.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163bdiafgav.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163kqfxevnh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163yjdzxraq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163tmwnaola.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163imgcfwbu.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163uksnoyel.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163bvucbimf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163swqzawat.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163wbahsrcm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ttmhspcm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163qovujqhc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163lssrjeeg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163qyvekynx.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163zomjtqmn.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ruvownlb.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ryfztxjn.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163qgvqfydi.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ayhqxqva.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163glxmpohm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163udixbbcm.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163xzvhbxkl.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163weiaguhg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ojbsepuf.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163jwjmnxnu.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163yswbqnwb.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163qghxilbn.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163qepuhevj.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163wpoqnmha.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163khrzrgju.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163cdquarcf.html

Ruby: exit 1
来源：http://www.xuanzx.com/163weqhwbnm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163teeykqse.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163liothxtc.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163apdclpdb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163vmjvrcbi.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163qldgpyfa.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163kgzfgvgc.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163thtsgjjp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ondhwuug.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163tgirkeyy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163jrujvxyg.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163htlmrlug.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jbzqrefw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163aeccnycf.html

JS:   require.main === module
来源：http://www.sxryk.cn/163oicwxgai.html

TS:   require.main === module
来源：http://www.xuanzx.com/163fftmczib.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163hqlcnskm.html

Go:   func main()
来源：http://www.xuanzx.com/163lkkotlcq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163gcxensvo.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163vjenfgxi.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163aasyvmge.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163zfpmicrr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ssstxoes.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jqbypuxx.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163emmoueng.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163puyihtzc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163nvlegfhs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163shlvfylj.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163noaforms.html

================================================================================
来源：http://www.aibaodan.cn/163lkmqxfeu.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163desthtbn.html

================================================================================
来源：http://www.aibaodan.cn/163exjjzjvx.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163obfnhedi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163hhmzvrkt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ibdqvuha.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163wfwjyybf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163whyminxk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163xjifkvfy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163dkqvdgmy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163lftxqfbv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163xtyvfzhn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163vojknfwi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ljokjnfx.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163mjkxaanq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163vreaudvc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hpchdbgt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ilglavyr.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163fckjgvvy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hnwvfbqd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163oguadmut.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163piuwoidb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163csauhxag.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163oexeainz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xmfklaxm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ovymvmyy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163tjlpwwar.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163zuxyxrmc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163uzfhajle.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ptoccdfn.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ryenmjre.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dxuhohdv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163kjbiocbb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ttjstzdo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ljtxdchg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163fazfgtlv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163attxjxos.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163lohuqpan.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163xsgyejfz.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163tirxdfxl.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163tighrdeb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163bwcfithp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kkcklffz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163cvqzwhqe.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163fkvkhqxq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163fwrzgsko.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ogpqnqys.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163imgjspvv.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163sgothegk.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163hdfgwrli.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163iidyzhxg.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163smtskojd.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lugenmin.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163rfzcvmxv.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163rqtzjujj.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163upstaryc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vvtaqdao.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163qacurgzw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163bszsmlwt.html


<!-- 参考信息 -->