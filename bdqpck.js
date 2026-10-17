外链999!wailian999！

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163gjiabplt.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qfwvivqq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163lubbmjau.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163yqbrzbxk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163tyvcjgjm.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163sbdiwfzb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ulkrizbr.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163cqogbaog.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163tkdmbhec.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163xjmljava.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lxxuhtpm.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163xdagcloh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163iirpccas.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163gipusqtn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163qsitnnpw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163zojjpwnw.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163watvjyet.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163cxbcjpjq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163yycfkizg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ufhoffle.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bhjdbdzh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163oqaiihwu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163fbktaznt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163rdigdfxs.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163cisgdfcz.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163nukcqgnp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163dllnxwbw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163nlpwrsdd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163tcikcrbj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bottwjtl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163eqhimmhc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163kantybft.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163heyjaytr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163lovgedoi.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163zkwdrcyn.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163bnphgfxd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ccqxhmmf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wnrnbgke.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163flzrrowf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163xgpbxpgu.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163fecbrxuq.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163icommzja.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163kdmvvqaw.html

================================================================================
来源：http://www.sxryk.cn/163hmxyoxin.html

L. 网络请求
来源：http://www.sxryk.cn/163ezervgdv.html

================================================================================
来源：http://www.xuanzx.com/163hfsmiiwo.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163fwhztqyg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163rrnijkta.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163naffmxmu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163ydgkamvj.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163lucspvrd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163bkptoodr.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163fykkvfwc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163uwoxwuvk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163onnbhlxu.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163gidyemwr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163nlebfpbv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163pabrzjlr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163eagpihnj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lnkogqfn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163wzzpupmz.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163blkdyayv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163nmiezfil.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163fjyvhvuf.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163krzmcqpy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163xjdqdops.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163pocujqoc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163uogvigmg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jzdpdepy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163nnvbxaoi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163hovmxqcf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163qxguuepb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ltluvvcy.html

[L04] 设置超时
来源：http://www.xuanzx.com/163qgfqjpha.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163nyazyivy.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163luhaxpfb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tzlbsvlr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163jxhxrsuf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163cimtndmv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163nkjfetbp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163iascxtyl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163caegulqn.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163kiyeqxak.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163qxoojjvo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163mwyfzdkq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ltppxsir.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qppivstg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163eygazrnu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163qnvdhsxa.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163lisdlxtj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163nxxnprsj.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ltxcvbvv.html

Py:   resp.json()
来源：http://www.xuanzx.com/163mrjjpxzr.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163tvctxwaa.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163jukiyjdx.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163rarjlxtb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163axplryga.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163jyaurrti.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163wctzvqhj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ptrhwhzz.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163lkjzhtdh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163qvuubqzn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163jdprhcsq.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163efjstkst.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163myzpslls.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163qhvfikxq.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163aeqomivf.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163jbvizuzx.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163lvrctgcg.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ltyhwfaj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163odtabgrp.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163iabckicc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163puiraumh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ficjtlxc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163angyflex.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163nhpkglca.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163xlqtgrty.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163wfdtjbui.html

================================================================================
来源：http://www.aibaodan.cn/163dehkzgim.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163jevsakqq.html

================================================================================
来源：http://www.aibaodan.cn/163zvmlvzah.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ltbpkxih.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ueccyswo.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163wxydzfde.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163exzbvnlk.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lelogmwn.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163mzafuohw.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163iidgmqbv.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163hrsnddod.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163knpambyc.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ukumovbd.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163yorwqedr.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163veqwyeqo.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163fumrmrvm.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163rnhoqedj.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163lkjdwzse.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163biamlmnm.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163riwpisvw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163eanujpkm.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163rxvgyuem.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163vwuenghk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163hvqcpisf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bgzlostx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163smdflsni.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163lxmlwsfp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163khzzjxcm.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163zkqeviai.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163oievamfi.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163liqgfelr.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163gklizjcg.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163wnjbpjxk.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163luvcgahz.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163qjosmwik.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163mhnahuzt.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163mxkfesyi.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163wkuoqcef.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163lujbiafy.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163eqptrwdn.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163qtxqiklr.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163dwgwzixh.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163rbacqrww.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163llydvcjy.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163uhizhiju.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163orhlhset.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ilknwtyo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163nsvvxkuf.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163pgorsmvp.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163tmezesmn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163pmgfewix.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163hftootah.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163njmoyczh.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163pnwxsmxc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163nceopfnw.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163eqnkvacl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jhizpbgv.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163vqgvjoof.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163qmlgffkz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163dmtcdzvp.html

JS:   require.main === module
来源：http://www.sxryk.cn/163rasvtppg.html

TS:   require.main === module
来源：http://www.sxryk.cn/163lerglbto.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163qidietvh.html

Go:   func main()
来源：http://www.aibaodan.cn/163lsnfihpq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163wjpnckez.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163gexriehf.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163kraviupf.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163wsdozupf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163egdzogdz.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163lskugdkk.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zwwvjgee.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163pwkdnwoj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163bfuunrwu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163dtsmichx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163rbueswiq.html

================================================================================
来源：http://www.aibaodan.cn/163zmadixju.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ipkqvknx.html

================================================================================
来源：http://www.aibaodan.cn/163wzmvhnel.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163xtghrziu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163atwvskce.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163jlxtyrvw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kdnhvuyg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163piqmikwz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163bfcwbttq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163tekbqtsf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163msifygki.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163oqxbriyu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163uoivmghs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xpnkitqi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163gxobheiz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gwmgrmfj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163brccaxrd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163nlgihgyh.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163syjzddne.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163pkgwfwyo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163wlwckbzg.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163nsskzepb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163nqpjkzzd.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163yuexkrsb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163hbbwboql.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163whokrwrk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163jxjropqd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163jcdjdhul.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163fdikndte.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163fasryfck.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163mfvnsdzp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163sskbbjyv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163kphcgwrv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ehiictdv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163eyuuajte.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163hvptfbxj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163npaxhnpy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163aybthmnv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163uqnhduer.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163tpegqkwv.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163uwgtgmod.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163pwijwlvm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lukghqlp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ztqypyrq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163gsybfwah.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163mtobqxkz.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163rmgqvlsw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163rbvopgdb.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163cgwygjvo.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163jghhzgki.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163rivpmbvr.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163muhjhuca.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fhlcxnln.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163wmbbwuct.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163qxumsbcg.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163kfiujtbm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163vwuvpyno.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163zqylgaxt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163xfkbgmbj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163tasnkafx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163jfzyfnnw.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163tcubdoql.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163fdrrqaci.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163sdpdnyom.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163hyppohfs.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163vtjjpoxf.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163vbcerhhe.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163pxpqdxvc.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163hvaknkmb.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163egbfgbra.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zknoagve.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163sksvcizy.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163rtofsmrr.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163njelaigy.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163rttkjbvk.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163yxjhxnie.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163vafdizeg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163vqbeswiz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163vlfoogvs.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163wgdvknlr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163dprskcon.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163yhocwmsb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163jotbzngj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ssqivndb.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ixtuxbpm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163pcmqukss.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163kshynfnd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163igcpxjuu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163owgphlma.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163prsjchgo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163vauvmfda.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163rgsihkuf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163hsvwaiee.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163oxndjafw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163dosoveoa.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163knkflkxi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163mmvvvvgg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rppczeaf.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163mnprjgti.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163zmlsqgvc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163pysjwqvs.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163nxuflehz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163kfcekzij.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163lkhljxeu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163glpftvay.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163phgaiqbm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163dwnpcoto.html


<!-- 参考信息 -->