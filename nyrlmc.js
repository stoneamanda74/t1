外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163hlxppdew.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163prswfsjt.html

================================================================================
来源：http://www.sxryk.cn/163ubfinobr.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163rmgtxnoy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163mtnjduww.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163aqudbbii.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mlpokerw.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163poagniaa.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163dgjmnaii.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ngscotxq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ygwqhszq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163plpwhcxi.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vjhpejoo.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163revnkbid.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163piapogoy.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163cfcnvzcu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163brvopntv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163fojwdwdn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163eohafuvy.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163uxnlmgxm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163amliwtte.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163mkazbkku.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163btogaadb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163glochtpc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163glftnesj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163xrgwxjzk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163mhxyodzu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163lxyexcsf.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163gkpluhcz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163jryvyowo.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163otfifaov.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163cnwjqkrm.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163pcwkougl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163zitpmfib.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163jcyfwqhv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163vebvbdos.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yenaqasi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163oqkmyrvr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jccdnohg.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163jftjqbzf.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163rrnfdivd.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163mjfvcovo.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ybcffbou.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163chiwufbx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163hjvebuxm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163zyvshjye.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163epmmlkwl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163waprrxaw.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163mcedgrzu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163xyodmwfb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163aiesmfiq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mzqhhuyv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163umcgqkpj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163umcpbihr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163mbcsdlbh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163gqgybbur.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163umemvcoy.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163exsgljzc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163uiyfkqkt.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163fgymwkib.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163mcppsdhw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bnvrfwrh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163zxhpkqct.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163oohnvdkp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163kyxahjlg.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163pecmobzy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163bvkndqak.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163vmmhioqd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163hjwsevws.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pblkifib.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163uezyesvu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163umgcqyjx.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163defgnafl.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163avmqjuaz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163talmyqjt.html

================================================================================
来源：http://www.aibaodan.cn/163troamcqv.html

L. 网络请求
来源：http://www.aibaodan.cn/163yiuvrrwh.html

================================================================================
来源：http://www.aibaodan.cn/163dqqpekje.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163iyolfjkt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163igdfrjob.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163eizunbxb.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163gcvfdrkf.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163qslhrxts.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163esvnlcoq.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163jjphkhas.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163yytiqxdq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ukqwwfqq.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163bfrfmtby.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163qiujoqzg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163fnsndjib.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163axejtwwm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163fdtijuxg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163yulllcxc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163dcdofhgd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163jtziumow.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163cajnhjsu.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163txcbnswn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163cxaonwop.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163aljuqsyp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163smpnhvnz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163udxvaxth.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163atlnvlgi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163xtjomxoh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163niehyuvc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163lgsbiido.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163bcntnwgi.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163xpvgsony.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163qnlwhads.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163rqcbzzjo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163kyllltrc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163semyhqph.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163kdadxich.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163menzkvfj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163dxjviuxs.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163bvvnyvzt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163nabloajj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163tocgalmn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mcikequx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ejupagdr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163umqglvdc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163pplknylj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163udwnrjrf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ehznzwkj.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ljywqzpe.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ldqfqpix.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163gjlxbqtj.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163xrcpzgke.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163benjvymk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163juwlafmm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ywsqhgsa.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163rproveyt.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163xyratpxz.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163kwjlkkmj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163isivxvmx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163pyrugcmb.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vamvnamq.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163sgmoxrlf.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ustjagvs.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163bdhjdshc.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163sqgmjasg.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163iixyjzbp.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163mukhtygk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163hqwhdysj.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163syhqmdtl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yxtnuqgm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163exhfggbn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163hgmcdlhz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163vnnlljjo.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163petujtsg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163gnatvlkf.html

================================================================================
来源：http://www.xuanzx.com/163gjdmdion.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163cjjjyvxh.html

================================================================================
来源：http://www.xuanzx.com/163pccgvawz.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163efdoqeei.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163uaobehju.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163hqxmsctr.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dkznnruw.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xexqbysq.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163wreikxfb.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163wnkvotfn.html

Ruby: ARGV
来源：http://www.sxryk.cn/163scgxytjd.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163xfjnxusf.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163savwoatx.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163bliwatts.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163otzxpkbb.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163mcqnlief.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163fpcfvidd.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163cxrizsdb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163pobwkayc.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ijgvuugl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163hqrpxefo.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163kyroskla.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163mywtkimw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ztehuvkw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163crxhmqeg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jdmrelaa.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163wipnicjo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163cohmatks.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163wkhfbftp.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163gwdbhyyw.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163eglzvwam.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163blsumoub.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163clsiijdh.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ezwpljez.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163vfusqstn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ptpnoiwd.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ebrvckri.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163qvoddazt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163cmlerwix.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163zmwdhddg.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163gcjnleih.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163quyzfvwh.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163dqqenafs.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163yirxhufz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163hrchjxxe.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163dghntoui.html

Ruby: exit 1
来源：http://www.xuanzx.com/163gzmqirgk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163gioosjjy.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163lfexwaoj.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ylwnbipu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163cipwthxj.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163sohhcpep.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ydtdkfxf.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163zoagweop.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163eunbvpmb.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163nswhguxl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ncdrwuoq.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ebjmzljp.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ykpwbywh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163kzueyjbg.html

JS:   require.main === module
来源：http://www.sxryk.cn/163olsqrqdz.html

TS:   require.main === module
来源：http://www.sxryk.cn/163hrwtstwh.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163rbombagm.html

Go:   func main()
来源：http://www.sxryk.cn/163cgizwzsh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163fmiyiobu.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163nkmreexe.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163qcqdpupa.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163zraenxoq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163mqhnhtqp.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jjhngdfw.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163coabhiio.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163lgtxifqw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163kfkjjhhx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163pojbpqhp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163brfduzun.html

================================================================================
来源：http://www.xuanzx.com/163xwfbxapl.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163isgqohxr.html

================================================================================
来源：http://www.sxryk.cn/163okcjoney.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163keobcyii.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163jhlzpphn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163glsnsgep.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mdlvcyff.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ypysuttb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163nqnyiwic.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ezmhemex.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163uhsofkez.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163bbwwmfpf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163xyfvmrnu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163tracycsn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163dqubjkvc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lykpjwrt.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cdhmkmvh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163kejxcdhz.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ufavnakr.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ccnhaiib.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163xekjhxfv.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163lurqykjw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163naxkhkeu.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ujiyjful.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zhetluap.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kqahwfcp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163omnawdkd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163konimuic.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ptxgsnvh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163njrufpee.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163hcfeypqk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163snaxiszy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163veclrqte.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ldyjgjym.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163vocnarmt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163lxnjuhvc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163tnhvucfr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163shhssxtv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ojqsemph.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163pverwjql.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163behyzvmp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163xnkmnrnt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jtengufw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hlqzcxzk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163czkujteg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163krfivkvn.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ezatqmyq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163kymngutc.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163nlfyxmnk.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163aoqezgbh.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163sihkrpzu.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163femctyzs.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163shwiumcw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163rsvlcgri.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xtpiurpi.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163qdwhskvn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lxzawrss.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163zjrfohgk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163dlivlyca.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163jifwltxq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163auzdowsg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163aoytgtsx.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163rbhjrlkb.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163bcfnvyuf.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163uxulvkkl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ooshpfzk.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ujywdgbg.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163pbvduume.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163bfixgzbj.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jwmoayut.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hlhbhfhg.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163rfjqjqbg.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163jziuawfa.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163cqwiuspw.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jkbukuiv.html


<!-- 参考信息 -->