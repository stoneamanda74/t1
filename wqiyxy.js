外链999!wailian999！

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lkdcfdpf.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jnwavhhp.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bfkigdco.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163owtznykh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163oxevnrtq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163gftvsdbv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ksfwlucg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163uhgvpvzt.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163wmqekert.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163zkeaphaq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163tuthmhus.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jiycqvwj.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xyqdeimh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163kjjozkil.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163qnnbtjjd.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163lksyactz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163oruqmxxg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163tsauqtci.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163flbtugjc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163nrlrwusm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163vwayfnsk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163roiiugyc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163dspxpncp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163tqigtupd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163kxddccrq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163vfvfznpb.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ugtojkqe.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163kwyniwdn.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xkjktvke.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163johasgtb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jcagzjbr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ckogbrsf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fzcfvqwn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hkccxzcv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163mgrwlhqz.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163tnjfrdsm.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163yeqhomqq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163wobfscyi.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jmemyqtp.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163cevqosqi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163iqdnmsvo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163jkbmithp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163wvtbrcad.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163dtfutesg.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163woyqxxng.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163olgvumhd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163nqbhmwus.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163lstqlhmq.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yfyczxwg.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163quvrzcbg.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163sgevqgcw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163csoexppz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163seohqrig.html

[K07] 进制转换
来源：http://www.xuanzx.com/163jyextqqa.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ufrqgnxu.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163kdpjgoea.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163eajiwzlr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dnzcxqgu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163ogeluuzz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163neqjyvbq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ylgmotpp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163pczhfqhe.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163dkqnndoh.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163mysjqblq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163tldcpjnm.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163itoxxein.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wztcvinb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163cjrhxjwg.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163xzluoxfj.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163lpmfqvta.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163mdnfijca.html

================================================================================
来源：http://www.xuanzx.com/163neuqrtdx.html

L. 网络请求
来源：http://www.aibaodan.cn/163ikrsqnwb.html

================================================================================
来源：http://www.aibaodan.cn/163pmdpvrrc.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163psovzjac.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163dofihypg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163tcwaxibn.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163avabaohj.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163hnjgsbpx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163yeqgnvxb.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163segxfbar.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163wbhtxppe.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163uftypurs.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163dzhawtsj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163lkbbfqbp.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163nznkfpmn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hjrjndfh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ixmveamx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163htlqinye.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163qeabxzpn.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163dcznzobh.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163kfvmtbwb.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163jyuyjywf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163oidpsgfr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163kgkywhhs.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163joduxwxt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163risyvace.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163zmnlvckg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163avceutcf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163yvakfnbo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163pmdrwlqo.html

[L04] 设置超时
来源：http://www.xuanzx.com/163hrsuopke.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163yebmtjpe.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ipsuuirp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vlfikwwv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wmmdzgml.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163geyxfwrc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163idcjydag.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163kdjvnifx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163rtxkzpjx.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163jcqptdtx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163shyeoicd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163izqzqkjm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163srdjudka.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163scyfnmsd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163rsdmygdk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163lknnzist.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163vcnrqnut.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163mutbsrfb.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163sqmaufro.html

Py:   resp.json()
来源：http://www.xuanzx.com/163qigwrofa.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ccjszjse.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163cwgcmbpb.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163kkkgabfq.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163dvipsvgk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163afhiftif.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163rebskvwi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163vrbbmkfs.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163dkjotuqq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ysgmyouc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163kaeidybv.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163waybrlno.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163enfdqtvp.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163xgqdhsce.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163eyynxdzu.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163uqborgmg.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163xyfkzyvu.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163uscmzpcc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ypllegja.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163toblopfv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mawkqdpq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163iznyocpc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163cvaokrjr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163wpuqinbx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163xjwthqeb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163uvfxudzi.html

================================================================================
来源：http://www.sxryk.cn/163efvhthpu.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163nqbzllhw.html

================================================================================
来源：http://www.xuanzx.com/163yjxjdsgj.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ajalkqwn.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163lmkzkmpx.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163zpduvepa.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163hccsodwq.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163htjagoqp.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163qajofexl.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163gghnleza.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vgtkrdlu.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163omterxtx.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163neclokrf.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163bgcmpuaq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163rllpdxmo.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163whksclri.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163injvmlkd.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163utrtgoij.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163dyiqnqsn.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163lxfubmmr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163vciftshq.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163mxcezjkx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163awhpeavs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163jliwpiqc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163gocantcc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zlrbalrn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163wdnwkhrz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163nmovsyza.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163nmplzumr.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163iyrlvwuf.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163nlsevdjk.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163qrpkdrnr.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163fkdjwcdw.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163zasrtcvo.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163xbwsgjbc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163uaonawqi.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qvrxdiym.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163iozcjhoq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163wqfxqktp.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163gtmbpghb.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163eesketms.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163whpfktoy.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163vokynbmw.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163jvftzsra.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163kkqivqcp.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163johukwga.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163yfhhogqn.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163elybhmpk.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ggtbvhtc.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163dgcnsiyz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163exyopquz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163jzhdrhkl.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ebbegsnl.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163hzsvyipy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163fyxhazca.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ltplklbq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jxbftcdy.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163vludrzmp.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163vogeepjm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163nsfasiqf.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163mlacxzfh.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163vhmmldml.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163axssevta.html

Go:   func main()
来源：http://www.xuanzx.com/163ahvvxmuh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ydutokaz.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ctieuhvd.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163hrhwlrfs.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163djatcleh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163rwjjvlgi.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xkmnkwhr.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ezhncpwn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163sucluaiy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163fzctgujf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163bxfegjqr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163omjqxfxt.html

================================================================================
来源：http://www.xuanzx.com/163staklvxf.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163lqukrtvp.html

================================================================================
来源：http://www.xuanzx.com/163fxcfnpap.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163oskbpkfn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163kmougltg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163bmtzzanh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163egwjldae.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mgnxrdow.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ynogjdbh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163dfpqhmsc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163kmsaxlqa.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163hplkezhn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163yxhbnqkz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163nximnlhc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163bqkvztye.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163tzlfybjg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163iazxyaej.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163dcturlry.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163trooxxhk.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163wuykbphe.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163wxgzgfxj.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163usixzodx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163agylttmb.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163lcuyaafi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tafzacpx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ueadggvm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163xekkiugi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163fdsnckkp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ooqrzfyq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163gbwifhlp.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163rzsvqfbp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163gjxtepxe.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163tmippmnc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163loeqgnzs.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zbufbxmh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163bsnofdxy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163xwzynzcj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163lhqicfwr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163uxsyasge.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163llhntddg.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163fnleahuk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163izrfftqm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163nhvlmmvq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163imczhqvn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163gywbrrzg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163osjjrkeg.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163nknkatga.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163zbyhhnld.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ekspoqlf.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163vihxzxru.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163riqngfuh.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mpsurpeq.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jjbzrhrb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163oujcmkot.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ehpufoio.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163jzhtdixk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163esaokgdd.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163uzcoapol.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163zsmwqemn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ndonyssm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163xtneugrd.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163xjowkvbs.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163jqmafyug.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163edanxvtt.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163nujutlgm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163lvbaiyjn.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163dnhulogw.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163albgrprp.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163stcslzjd.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fdcewrdf.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163tcccaunu.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163zebjxijf.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163yepesvwj.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163gvdzshak.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163piojcxtw.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ekhjvfmy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ssmmfezi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163hyqgsrea.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163omnduhdo.html


<!-- 参考信息 -->