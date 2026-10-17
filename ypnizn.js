外链999!wailian999！

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163wmkyjiid.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jhvzxkbu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163pogyojzv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163tdbtelmb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163pjczipna.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163chhkcyfn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163kffmoghp.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163lxxorimt.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163rimwkfgz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163pxolfdbu.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163uzaglhfj.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ehazlmkl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163gmtagqls.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163npsraxzg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163wqufzvwl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163crubtamp.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163fribpjsx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ixsrpqpp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163wvdmzlbj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ihfkjysg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jtahkvii.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163gcfxdlpn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163jjvqmpxh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163zekbkvpc.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163jhnfbwgp.html

[K07] 进制转换
来源：http://www.xuanzx.com/163vovrhdwn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163yjcpruaf.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163pbrynnud.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xbzxreth.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163wzhdtsbp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hbbpdsrg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163oesbfylr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163adapbigd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163wfhtofjk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163hrsyqgqb.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163qcatnnzz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163lqowifbc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163pvipgkga.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qfofdjdg.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163gsfmparj.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163jhkgkhal.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163xcotmxbc.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163yduyljcs.html

================================================================================
来源：http://www.aibaodan.cn/163iamcwqvb.html

L. 网络请求
来源：http://www.sxryk.cn/163tmqoyfvz.html

================================================================================
来源：http://www.aibaodan.cn/163pngujypr.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163dygjafgg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163hegdkadr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163jevvzxkg.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163jikhzvql.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163waiwozpg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163ghonnuhw.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163jcglfrvc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163jtfugtos.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163nftkhbrg.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163qzflznjf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163quudkuxu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163zzqscgcq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163cyrdmdcr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vhrmlbzs.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163vvpxdiyl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xzhgxzfj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163zpqvbcis.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163prqbxtyd.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163pdgiaeoy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163cdptyszx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163bauljxoc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163rlnpvvqu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163jqtfsjpt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163vaatdoxy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163bnwahmrb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163yxhsqxlr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163hlsynnqq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163rmcduvgy.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163xndzfvxp.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163neqmcasw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163pzsuollc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163tzuexylz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163tocvbgeg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163hevogacv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163barpkyry.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163kiwupyaj.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163eabkusgk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163xdbnsspl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163bessrkda.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163nthyphij.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163rfmfyedr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163dqzedtcj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163otvbftei.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163zrknkoqp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163igzkijcm.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163xhrqmihj.html

Py:   resp.json()
来源：http://www.sxryk.cn/163sekbwygn.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163yxmnfqhw.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163tzxthgfi.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ttzqkiyj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163vddjjykk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163zekviota.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163lqamvdxz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163dzovhqnz.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163lqjdfcsf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zqehijih.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163iwbulfmr.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fxmwxpxz.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163iithxifs.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163iumbkdos.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163uiyepenf.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163gzdhnnsa.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163eeslugsy.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163nfywtbin.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ftecmigo.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163pajoqdza.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ayupjhgv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xsuoegdx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163sdkpfpet.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163fuudzfbu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163syadzisb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163iqeoqdjs.html

================================================================================
来源：http://www.xuanzx.com/163kzgnmstn.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163nlvcqhdd.html

================================================================================
来源：http://www.sxryk.cn/163msrzkcej.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163mtklwtge.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163blwcrsfz.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163qxzmpndt.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163tsaqjnwk.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dzaclaeb.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163zsxuokak.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qciryzlp.html

Ruby: ARGV
来源：http://www.sxryk.cn/163xbrobmer.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163itcidbxr.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ckrjrjrd.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163vsedncfd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ghejylkk.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163cmetbndu.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163pwuwejce.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163pnixeett.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163mthshvob.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163rhuhhnlm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163rpnawqnq.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163lgqryrwo.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163wfpzncvw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163qyaxyfsw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ztedjacl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jfwrirxw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163matrqnvu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163kaghpoxd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163bxarhxgb.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163kyotddhs.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163kjgtsvcs.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163tenmwztk.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163qskbwafx.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163voiiusyo.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163omgsblcb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vbjmjovo.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163quzrbqly.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163fkxctwuc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163bqcigqyy.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163uqmbjhdy.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163xiqlekpe.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163czlouigu.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163cjighayv.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163cldpfwua.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163hcvgffjr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163mekagtvf.html

Ruby: exit 1
来源：http://www.xuanzx.com/163tbdtfkjq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qiscbpjp.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163auauhnkp.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uvefyiaz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163bmcderjo.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ivyqbrsx.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163fjqbngna.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163bzrbazie.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163hmrptmng.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163hcqdbyut.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163qzdrionb.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163qtpljftr.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163vjugnfdw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163trfrjhiz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163nlujfnai.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163tmhikxrw.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163qnhxxjhp.html

Go:   func main()
来源：http://www.sxryk.cn/163slgjjppt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ruoyplqw.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163cvqwdilt.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163svvkihwf.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163mrfdklec.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163xcohrwqp.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xikxpemf.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vgylrkov.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163milmhgrl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163tzljqqzk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163nnawypuc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163eyvbgaxg.html

================================================================================
来源：http://www.xuanzx.com/163boigssbc.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163bbbckthf.html

================================================================================
来源：http://www.xuanzx.com/163ypegyedx.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163coqarjqv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163gmqzuyfr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163azakobti.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xxoeldde.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163fvbtoiaj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163lkptccpv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163xemtoopk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163wwlwpony.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ugvzfllm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163umceeddd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dawpvudt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ambggpvo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163bgcukcnr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ofgzhuen.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163qmbpmgfi.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163vvxneoac.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bzlqrrrp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ukpqmjeq.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163euldxabd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163vmtwuwkd.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163wyblwshn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163sgtvulna.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163pvborikk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163fwddlxvb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ucnaiegw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163crozqodz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163vmdxxqnf.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163qcqusrpa.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163yjulrdky.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163dcmmjicu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163htaxxogu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vtkeptqq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163hdesgzyc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ivwwczlv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163llckpdgl.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163vyybrzie.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163dmjfyjyd.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163imueuopt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163quofudex.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163trjxsiuv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lasgithd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163rffemjgs.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ihschnue.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163btgtouzn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163kbeouejc.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163xenkdwji.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163rjqepotr.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163svushayt.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hpoukpih.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163qmkbmjac.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163dzdlmqud.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163lmopmsol.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163lsotrydm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zviicblh.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ntyhgqko.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163vyzwbyzr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163cpzgghbv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163jqtyizkw.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163fpitftpb.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163adktbzdp.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163earayqwg.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163vjdsevmq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ykxszrpj.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163njjblmfb.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163nqvakdyv.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163gowndpdz.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vngtskkx.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163idttzdzg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163tnsuvedb.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163licolydd.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163mskixrco.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163anekynzh.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ydexwsab.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163yecxvgia.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163vdxstgzp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163lmondkhw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163twachvwo.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ljwkqlqs.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163hvplzvyk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163jaittddf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163dbrbutuo.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163qjaixybf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163oabwoska.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163jrfqpaqc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163xbcajgop.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ukymeofr.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163trkahjwr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163gwofyong.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ccryznbq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163yiavockg.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163nridsxps.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163hxsfxwjo.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163adqfxpva.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163spdbysdd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163giqmiyxa.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ruoshzqz.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163skoehhxy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163osjytnpn.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163zubaacdk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163hunahlfy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163bmwrqgfi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163aovudqyk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qphsxqvj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vtvmsauk.html


<!-- 参考信息 -->