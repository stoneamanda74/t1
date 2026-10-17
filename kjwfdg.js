外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163rvwrcjng.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163rmvdhrvt.html

================================================================================
来源：http://www.aibaodan.cn/163qxmmfrzx.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ryamuzlb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163azxajjze.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163idupyqoh.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pmgibaxs.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163dtjdhkqf.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163sojmruzp.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163wwyktdck.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163jwyeijzg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163jsmuyzyz.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163jpfyjjfn.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163jxlsspug.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163wgrlmjmf.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wfvfbarg.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163puxvmxsy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163yjjbxkjc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ngajvzvd.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163gzhwunwc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ldahwlfl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163atzgymyi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163xrnhkzbs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163wbaslztu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yjbfxlpp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qrizelma.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163jqjissen.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163tmnfsstd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ansqdecf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163mbmuxecw.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163qfnqwkwe.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ucptwzds.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163rinxalyd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163unuixhmk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dcqvdrmv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163aymmvzbu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zeayrqrz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163sjuymbhh.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163lwqjloeu.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163cqohgvoo.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163ohejhpll.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163aqinsdlp.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zyobzltt.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wulxdisu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163unkyczro.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163pvfwhfif.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163xdirnlwd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163tjuunton.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163hxsmofix.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163awsafwex.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163fzolruhw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163kgyzfvje.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dxamannh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163fmewvlpj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163fyflykub.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163wprbcqpi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163zopgbilm.html

[K07] 进制转换
来源：http://www.xuanzx.com/163xwzgwpyg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163mqacbnim.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163iydpkxpf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kmfvuqty.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163esokuqhg.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163clezttsx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163uetsulwi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ktdrfrwd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163nqlkphkk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163leggyozp.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163rzlukihd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163vinbhvyh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163qubkhtto.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ketopjjn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163bxsgvrdd.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163zgdwgboi.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163fyusrxcp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163dqzixpzx.html

================================================================================
来源：http://www.sxryk.cn/163sqojgqgp.html

L. 网络请求
来源：http://www.xuanzx.com/163nxleodrg.html

================================================================================
来源：http://www.xuanzx.com/163furlpevz.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163lqehyyhx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163wefacfxx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163qolqxwaf.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163mhlaacuu.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ivjwzncb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163wafxzajp.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nqcpclup.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163svxsjrhc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163jndsibxb.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163jaqblgoo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163gvovpkkx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163rtuntern.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163sfpgglqq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nusttvip.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163llpfklnu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163caohrwej.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cphlvspd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ujwtrlhb.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163mldipxar.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163acizrkuz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163onwozkjb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dofwaell.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163oebmmdrn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163kqgwezqg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163szcmzpnm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163azujecsv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163houbqdsc.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163rtwkpfaj.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ufczjjsi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163uczdjulc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qonudbid.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163klqbpduv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163hxstaxxr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163rgtgkshm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163dcnjluem.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163fyemcmal.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163ufewuioh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163restwrmi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163irionoch.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163uexvhfgv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vfviaish.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163cytontmc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163dvespdes.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163oriofmgo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163jvgpgpyg.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163wtgbebaq.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163hqzmunov.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163iynhgrvy.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163eqawwfrf.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163fxyalcij.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163crjmmiyl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163cuvqjezc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163oyegbnyz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163mblpnsai.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163jkbcjuni.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163kqegyshw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163hnwybtya.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zorstfpj.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163qdiwoptb.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163apgeqgvv.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163quwvtkrr.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ripyhtsc.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163mvleyabn.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163fwfbsclt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163azgffsjj.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ysvughdi.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163cgylaxfu.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163esdcolvh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163rlcmxbkh.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163xhjrftya.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163busnccyx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163jmqhokpx.html

================================================================================
来源：http://www.xuanzx.com/163vhuqceil.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163glmrmaxt.html

================================================================================
来源：http://www.xuanzx.com/163nizinixf.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163kkyvbosf.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163hbzlghbm.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163nrwosryk.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zryklizl.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bkzyjsfo.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163zceqjwuu.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163zdzobcsb.html

Ruby: ARGV
来源：http://www.sxryk.cn/163qrsagpjr.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163uxgzdmfe.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163qaxurblq.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163bmzxgckn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ktjpmbdg.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ihlnuxvs.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163clxnxida.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163tpoialpc.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163bcxgmjvv.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ldeygvdf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163nyivgqdo.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163lauwivyt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163xqergxbt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163cldnsbyj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163qorazqcg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cgukgtgf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163kvjzehtr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jacuphjh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jctfamug.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ybsuryei.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163uprvozps.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163egvcfsbi.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ygpzjvoj.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163rldyrsfe.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163lrdlcvec.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163fmbvndoa.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163uqjjminc.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163fwepntdv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163blusrjnj.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163lkmmrdxg.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163feaeykjb.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163btpvvwto.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163wndejspy.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163okwhxdyf.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ezwavjtp.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qnligeyh.html

Ruby: exit 1
来源：http://www.sxryk.cn/163oiejscat.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163mamkunse.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163oxmwbvbq.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163kfcjekzf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163gnspqehm.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ggvbadgx.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163dntxgigl.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163llvtwdzs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163zoeyzcqi.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ujuaihdf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163vjhhmkqp.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163qoqvbqmc.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163lfufnmso.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163guybbcre.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163vzynvsse.html

TS:   require.main === module
来源：http://www.xuanzx.com/163gpfmapvr.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163mhcdwtes.html

Go:   func main()
来源：http://www.xuanzx.com/163wulgkyey.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163pdjxjbvh.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163hoclpmqu.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163tpgstzha.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163zltjbxvu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163qmvdrxds.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163brfnfswi.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fyfbbajh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163uebmrfde.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163bvwxwcvx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163gwmzoafh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163nmttyagp.html

================================================================================
来源：http://www.aibaodan.cn/163kqrbeaqq.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ypehrrvm.html

================================================================================
来源：http://www.xuanzx.com/163tdarfnkx.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163bnnuydzn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163xiyzicxq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163njdeppcg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163uvhawdtw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xvvageqk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163byiyjbdk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163bcmvybau.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163hcoxcmxy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163cfujtndx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163koztlwkz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163uekgvfod.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163mbxxtlso.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ybsbdcoe.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163swvehxpo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163elcaovjj.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163owstudoq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163yzcgffjf.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163uaggvdmh.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163icwqmtyz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163kcvulfzz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163rznkxdph.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163nipywhkh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163iotrncmp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163hvjkihxs.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163nuecshnv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163nyrthbam.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163mhlmmqer.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163kodgmkrx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qiqrmiwk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163aknvwaha.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ukseqknr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ishwgaji.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163wklkdrdu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ghjqotmk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zbsuqdlb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163mlkatcwu.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ldpccxjx.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vrgsecgp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163xkalkupx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ziivexok.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163dzrdkpzr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163peklmgnh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163krcuxnsk.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163uameusib.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163sjlwpsba.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163pcheqewa.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163oxouxieh.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163wadpwpwn.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wrzbwaoi.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ecktjxsw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163npbczijc.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163opujbcjb.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163hchjqisc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qrdlcosz.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163bleyjplw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163zxvshbam.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163okrikkef.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163lzhggsps.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163itpbivxs.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163tnuntzhm.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163mbvdlwjk.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163mcyvmeig.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ktjcufzu.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163rbmcwzgn.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163fogdjghw.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163aleibhih.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163isznfnvt.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ejgsmtmm.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163niruvjco.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163kxsoxjzl.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163vvmfooey.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163lmnecjuc.html


<!-- 参考信息 -->