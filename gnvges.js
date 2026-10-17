外链999!wailian999！

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163aoolqinu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163nbvnitxv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163crctcrfa.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163rtbgiqhn.html

================================================================================
来源：http://www.sxryk.cn/163trwtsvaw.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163lkyjjbda.html

================================================================================
来源：http://www.sxryk.cn/163tvteucdp.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163gszcxgkj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qrwbkgft.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163alwjebts.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kvihgkxb.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ponyzarh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163cjaufkyz.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163oecmvihs.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163cxuyaidv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163kbeokkjw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163pqahxnki.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ozggwxil.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163wmqddxsl.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wgkfprxd.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163pxntskpc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163qnmsjjqg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163opiyffqj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163crgmvcbl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163xwrzkkvp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163qmtawser.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163rctlfklf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163hllkbluk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wqgopkui.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ajcejrot.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163vmmuvmbx.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163lxwnjuqy.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163niapykxr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163kuznjdfx.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163xbtqhoyn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163hxfcixcy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163dnsgxvur.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163tszjnhta.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qglfnhoi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163kkyuvpav.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uhgracbb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163fluiawhc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163yjhiqvbx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163gxlfspmn.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163ljrxvrcx.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ymipphmo.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163yntnhfei.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zhgluflx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163auzvcwmy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163uswizgvj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163jhluqfmc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163biizecjb.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ttefdznx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163slekbnaq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163azossdxz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wienhgog.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163velaiccg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163msskfjvn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163oarnqlyr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163iorzpztr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163avbhnrtb.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163zrntmyyf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163cndfxnju.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163wglbnuvc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ebzuakbo.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xndtfhsb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163cvezqitt.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163zllzrruy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163hckqljde.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163rdpxsoyg.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163fyrglmpf.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163qmjudqqz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163opyiedql.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163njdhpdrr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qzegytrj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163eczhioqe.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163aqrcicxd.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163enpnpkfv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163jckaairg.html

================================================================================
来源：http://www.aibaodan.cn/163wdnijvnr.html

L. 网络请求
来源：http://www.sxryk.cn/163eevhrshl.html

================================================================================
来源：http://www.xuanzx.com/163ocldbani.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163phexwcov.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163zccyrdjv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163axpyzeny.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163kbohludv.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163xxszovfu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163lmnygsrf.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163hgvslvdu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163cbzywqyp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163howuxmvx.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163qicrveae.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163lztelutt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ejnrtiby.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ipmvmqqk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ujvkaiuk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163reslapwb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163hzcfdpbp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163khmfltgj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ozrrkayx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163lybpmsdn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163xkdtxoxi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163kfdlbdgx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163wpfrlryi.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163sjnfzdix.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163oasumkja.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163icywraum.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163rfjmcura.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163dlqvtdvv.html

[L04] 设置超时
来源：http://www.sxryk.cn/163uugnlxda.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163shbohhwa.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163izomthju.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qndnrwxi.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wyktmgvu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ybtunovc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ioeobkga.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163chajmlae.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163dakkdfgp.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163pxczgpaz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163qlxmwkom.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163tztpfent.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163nrtdkewv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rezjmypp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163bwsakqzk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163hqmlaazf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163bweasqfr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163csycvyzu.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163cwkclfkl.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163tdivpddf.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163uomxfmoy.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ajjiokny.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163xcztrbrs.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ujvttokf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163eniyxzrd.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ygtsrlht.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163vlwappbc.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163uxrzwnal.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ykjtstwb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163czfhpnat.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gmiuqcpl.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nzlidwik.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163eqykbcvl.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163eexsijfx.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rexwrhrw.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xlgrevkx.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163zmgzaoya.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163gqthgeho.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163eutfsmni.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rovvgfhb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163stwvngtz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163mzqvvzpq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163lvdbjcoj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163bnlakfzc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163xjzrljbo.html

================================================================================
来源：http://www.sxryk.cn/163nnojyceg.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163unmfzfqb.html

================================================================================
来源：http://www.sxryk.cn/163ihhhchar.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163cogzjcay.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163duwlmlrj.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163cymyckgz.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ttajxfbp.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163nmbahxek.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163bygzmdrk.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163gberzlyi.html

Ruby: ARGV
来源：http://www.sxryk.cn/163crcbbtiq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ntexurnj.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ewqigmgl.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163tahkuknd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163lfxeclho.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163dcraecyv.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163bpvfkhsn.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163qkxkgoqu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163jlipxwzq.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163fmojjvfo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163eamigmes.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163qtmhngih.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163vokokehf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ztfewyii.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ipargyey.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163gmauqblc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163hnckvtjs.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ddqmghuy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163tvqkethu.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163fxymejup.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163pvunvbzq.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163dzexznyx.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163iszzhymv.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163zfheclfv.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163uuuxiiig.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163euqwgefs.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163rejyfavk.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163nhifsrzi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163isctguyh.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163dkhbcwjs.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163hihlbkpj.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163zquazphd.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163dwyqcekp.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163mycklonm.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163trzezpmz.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163sggkqdcy.html

Ruby: exit 1
来源：http://www.sxryk.cn/163nyflvluv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163tiamqofp.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wrtuedyl.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163nabwpmle.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163svaaoarg.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163wzpjdkwj.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163imuhiysg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163dxtwtimr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163astfsboc.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163qiamsple.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163gtgewpvi.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ktitetze.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163cpmbzmgm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163tskkoitz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163xhozvtow.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163trvddbip.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163romqmzto.html

Go:   func main()
来源：http://www.aibaodan.cn/163gklhdtff.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163jzbglinq.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163baonfefn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163wawihirb.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163exwgdkyo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163kcalsdqy.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jzsxjtrb.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163lnoodjjp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163qnltrsgo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163jpbloxkk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163hyxxuxch.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163xeehcyvb.html

================================================================================
来源：http://www.sxryk.cn/163wepwycxd.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163lwqvfqvi.html

================================================================================
来源：http://www.xuanzx.com/163fzxgblui.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163xgxqvwwl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163wjqgwavc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163mchuyhsd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163yybhitvj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163adrmwndr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163aumfimuv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163zmrgqmdb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163xnkihoom.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163cnvwvqbo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ybibgqdi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163eccqttqb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ydakeenk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163enyqprir.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pzrzihlf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ubiyegrl.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ngrnpsyo.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163cvgoxmei.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163uzgsevsp.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163aqlaxpnm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163qlwpkxku.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163hcplippn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zigncruc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xyaultju.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163trohgpyt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ocwosaqx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163jnxxievr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ivdzkadk.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163lnyijdzl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xfgmilfc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163euecusbf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lmmsqegi.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163wljcqlkh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163mfeyvwnm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163agrmikis.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163rgbaiwkj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163wgspcdza.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163xtcdyfpq.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163pvihyeyc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163cdxggafa.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163uswyixwq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qzckyyqs.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163pfjyrslw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163jqcxortc.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163iziezqbs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163mgaxzzdh.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163uiivpcdc.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ffowpmiy.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163pynumqlq.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tvhhjldg.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ywscckuj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163rtetlkeu.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163xtfrcake.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ojfcaqco.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163mlrfkqdl.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163hnorrfbm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ajxfmhcw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163aqetwvmn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163irzrdfwp.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ofzwmynk.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163xexikqsy.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ehwljtrn.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163snnqgzfp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ckodyhmo.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163upxgviqj.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163yqxrqqfw.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163zhklkmaj.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163frcjkmqq.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rkeacmev.html


<!-- 参考信息 -->