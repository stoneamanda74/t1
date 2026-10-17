外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163ojqcymuk.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163phbbexpd.html

================================================================================
来源：http://www.sxryk.cn/163qmznxkzk.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163qsubonvf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ofkwofhg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pnxivaxx.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ekcestbi.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163krypfrqe.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163dxhaxcsz.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ggdszazt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163fffpvbjk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163lfyvlzqq.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163teulshgn.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163cyvixqmd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163bcyglslb.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hqcgjyog.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rujtbdfl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ptnulkhg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jecgccwz.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163wsopebec.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163hofdnlvn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163rstrbnmk.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qiijjmtv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hvesyqrw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163unzoukhx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rimnpais.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163qtgujqlt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163lblrjwpb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163iiypxeqj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163pqpjwvub.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163lzrvuzto.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163dpkqzhxu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163iomemdhr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163cyibtgiq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163yscuwecp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163kssbhsxm.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163cnxpjntw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ttbxglde.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163fhiupusn.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163uvintrsb.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163nlnlkesb.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163jfvjzeks.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vlvsphtm.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vfdbpzpl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163kvhhahqs.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163pgtddeeh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163eityyuux.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163jvvvyinq.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zqhtjkrp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163sxbqiadf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163fhuixdbu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163sxtoliut.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rhvzuoqd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163gujwwtbm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163dtxsijng.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163jkmpfltz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163fvtvldot.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163klrpxbms.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163kncwlyxu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163zwkvnbrk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zarjbsrp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qnaakscc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xklimehy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163gvlenilr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163korghosp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163isjiaqiy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163antiqifz.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163aotlsbtw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163aoqggbms.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163asfqnfex.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ceqcvypr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163rwcgzatr.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163xphgtkty.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163cdmndbeb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163jgybyvkd.html

================================================================================
来源：http://www.aibaodan.cn/163tnxedhae.html

L. 网络请求
来源：http://www.aibaodan.cn/163hsfrtzpn.html

================================================================================
来源：http://www.xuanzx.com/163lvounbor.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163bxzfcizg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163lskzltzw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163mzvomlzv.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163rjsodjdr.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163pfxxvjcz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163otsatlih.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163iawohcst.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163tjyxxrtq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163iziyjqva.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163lchianec.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163pkbmognl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163zcmyukim.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163zzilirkf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163crmzplod.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163pxkegwda.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163micqfnpf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163qpjtumfu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ntgjapnh.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163pbylfcnf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163adzmuwlv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163jbegklhm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wtuhizvv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ipbglqcn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163iobelcfa.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163mjsdvsug.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163gqbctfje.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163phjxstpe.html

[L04] 设置超时
来源：http://www.xuanzx.com/163obdzrcsa.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ifavzgbe.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163zzsrzqsu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163brfmlidj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hxywxqrd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163vvrnmtee.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163pcyulzlh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163cfwmxcps.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163cdzrknbd.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163xwkglbrf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163itwtyeqr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163jqlykdvk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163fcjzoqlk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163olvptfzq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163xwtevvgy.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ebsxfxur.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163niqkkbdj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163jmwwdrdc.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ycklfkmk.html

Py:   resp.json()
来源：http://www.sxryk.cn/163kxgaofnj.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163bafsfkys.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ybtniktm.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163dimeefde.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163kqwyyfgz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163hecezmel.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163tfrzobjg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163nvywstzg.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163qwnwfefk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163hhpbzfbk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163gwzafmpr.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zysgdape.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gfedoumc.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163eppcyouc.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163vaqlrpuv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163uyfpckzr.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163sawaslpc.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163stzxcdxv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163oiejlxsb.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163yheomors.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163niplvtoy.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163cyxwfgae.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163prtwtoql.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163gocjbzcf.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163wogjyjjb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vutybihc.html

================================================================================
来源：http://www.aibaodan.cn/163qhcwlcyf.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163hmcpykmh.html

================================================================================
来源：http://www.sxryk.cn/163axdziqop.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ydzwqegh.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ogbegydz.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163fvtqkhcc.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163raqrkzcc.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163hnpqpbqm.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163fnvtgnax.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163aoqewwty.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zoogdvgf.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163tyscdbht.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163icyxrceq.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163rzqcmavm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163huvrdwqs.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163nyfhfaaa.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163lngzpauo.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163fasxnmrc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163jqvagjmg.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163cyaycjct.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163zbvsztbv.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163ayxfjrgq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ftfjyfvb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163rerwlamv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jnihnqzd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163beutqpaj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163qjsenygl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ifpxwfbh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163qkjppclr.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163sfpjnukp.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163dzpwmspk.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163wpvkfckz.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163bhjgwpew.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163qrjzgdin.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163wubrmstt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ijvaneva.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163dgnyxqqg.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163oyxmtfgz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163pawmivrv.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163mmhxaiku.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163jtmmmeph.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163siqenklg.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163cdopbgwm.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163llfbnuks.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163cpdiauhd.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163gnuziadc.html

Ruby: exit 1
来源：http://www.sxryk.cn/163fwyzvcxt.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163yyvdrqng.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163mjgecjwh.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163nfcgxvth.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163xssmzrfm.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163drqjepwr.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163yfshlaqo.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163plinocge.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163awfhcgvx.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163kiazdfgg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163qcumdllc.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163qqoyanuc.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163nkctklcd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163oisldzvj.html

JS:   require.main === module
来源：http://www.xuanzx.com/163xdtgldyi.html

TS:   require.main === module
来源：http://www.xuanzx.com/163mcdnwqtu.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163vazbyrlj.html

Go:   func main()
来源：http://www.xuanzx.com/163alhudgbl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163qugiyijy.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163qckbxpgb.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xtdcucpl.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163bnbvacux.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wlccymfd.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163aowpiyqy.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mpzmlbcw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163fctghprf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163cucyhoyx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163mlrbgkih.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ggfyxtbn.html

================================================================================
来源：http://www.xuanzx.com/163srrsyucx.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163jjcjpaml.html

================================================================================
来源：http://www.sxryk.cn/163bkkbfzym.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163rvrnpndb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163zsuzqxts.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163bvglmjex.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ejgnbtyx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ifnbhmqz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163lpeixchf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163orbbykou.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163fnmtanzq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163edruiiiq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jgyrstdl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pogiuyjh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163kzxucape.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163olqxijmm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nlkmybmo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163rstruijn.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163zqblpgrn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163tfkqkwev.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163gutynlua.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163odnbztyk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163rvjyywcm.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ummpnnlx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163eipviguf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163husplnsx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163hwqgxlbu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163faqzjlgk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163nofpjimo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163rirwyqty.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163gxqeobqv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163pujgxdlm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163xzwlvvbk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163paubqfel.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163nmriuctr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163mekzfxvy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163epiokxhz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hxefepth.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163rsnlgkgs.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163hsqgaveb.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163hbwhuxlg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163wrmzlysm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163umltxnrd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ycnvihuh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163edpotcpq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163gzkwobqa.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163zxbtcgeh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163sinbswxs.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163toicwiev.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163bacbmjfw.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163oozgebgy.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163yzoyeilf.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fcugmwww.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163vquegcus.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ecydvmxg.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163leleppvi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163imuofymc.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163gsiabtoh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163emtfrztn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163thifzand.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163xbzzenvy.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163czvikriw.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163jksueqbn.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163xguamksr.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163pazmveun.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163bxgrexyt.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163vuzjoyzu.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163zgsbwvad.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163czfncmea.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wkblbxmn.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xohrcrik.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ovfgjkjp.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163mwncwipx.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163bqvuyfmn.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jpvlsbwy.html


<!-- 参考信息 -->