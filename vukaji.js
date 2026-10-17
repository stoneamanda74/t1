外链999!wailian999！

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mfzpufrc.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163rikuqieh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163hqtgtlqt.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163bblwhhjv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163mhoexxnl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163lmrvucdp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gbjlzzhb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ntrxjeds.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nfxnyqeu.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163jeqzufny.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163sskqpkuh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ejlonlls.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163veoujomu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163foxtrnka.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163qgoummvt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163lleosmef.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163unrxcrik.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jkwgnnoi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ztsibrrs.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163tsxkkhuu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163avsasmfp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163gxnbuswn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163mjaktqpu.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163gdixgdgg.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163sklgxpix.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163loppzwwg.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163kfsyjfmi.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163klvmsxwr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rjhknmeu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163apwhhbpb.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163lpvspdwc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163lqoaulel.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163vfmnhcmy.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163nvjpznbu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163tspuqwlg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yemevkgj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163clzaxhtn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163zvdvnome.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163domdeuzm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qyxkaszu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163wuvnyuha.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163flwemili.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163zigpeqtd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163glnmmfwp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163uiyuodrl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wjdyjkvp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163sxmlbkoo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163xrnchbqj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ghhueadf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163papfiruq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163wejxwxxz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163nroeblwd.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163kxosyddr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163drytahpd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ofauwnuk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163sjyjakkq.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163vkpvrtzx.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163onwldilp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163dxfckfgv.html

================================================================================
来源：http://www.xuanzx.com/163autqmzxd.html

L. 网络请求
来源：http://www.xuanzx.com/163amaqplnc.html

================================================================================
来源：http://www.aibaodan.cn/163vpiblkib.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163zcfvrxyv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163bymwblyc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163wybrjbtl.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163gdqexgpu.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163snbtlglu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163sjhknwey.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163gfcyawal.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163iievdibu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163oddcynph.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163rtwkjxgq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163hzpnhjae.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163jyglcteh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bzetocgc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163utsyoecq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163bgnnaxfe.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163abcmdjnl.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163cxdhzjjg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163xxklgklk.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163srraxovx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163btdqwlrt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163mkslbtdf.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163krbcvicx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zpojvkhp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ltwoxfgf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163qjptcdke.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163kjwbbwnk.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163rdffvkez.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163fitewtlk.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163drjagwbf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qypnpzgv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vucnmnuw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lxaelcnf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163gjcqrijs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163mtnuhvqy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163mhpsonge.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163vgceshvb.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163attcfmvn.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163psifaudf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xhuxsgqa.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ybauuyjj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qmzqtvjw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163vdibpajv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qnlxjgud.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163hzgmcpcy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163hvrxdgvq.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xieumzwa.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163xvwzsatn.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163daarrjud.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163jlcuzjql.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163irhumqio.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163pupzbmxv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163mbzmbbvq.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ajivxrnz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163rcjuhmar.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163lxqxqvrp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163nrstkmcf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163sdyjyfjq.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163iuxmktkf.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ftunscgl.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163akppvqxi.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ivbyypmp.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163cmgwgkbo.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163vxeclgvd.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163asblmmaz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163hodijlbd.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163wdmvhuef.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163silmmqwv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nzeupmhd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ronwraas.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ccfsqxmk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163jfczypmi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163kckrrhws.html

================================================================================
来源：http://www.xuanzx.com/163siixvlnj.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163dowlbaav.html

================================================================================
来源：http://www.xuanzx.com/163fbfhzuly.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163yqusxdan.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163dpkayjeb.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ehsalwlq.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163krwsesxh.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163reapwvvy.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163nqxdrtyg.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163uenvcnnk.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163texrxlrz.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163pxmaogjb.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163czeomkzm.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163exdefcgp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163svryvmbu.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163doprolbe.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163mhsbgkgq.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163qsmlwupq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163kptxrcjb.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ivtlobwf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163obaonsyw.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163arkonpsh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163dvflhfme.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163yzauuxjc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163kqdxqmch.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uolvuujp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163nqncmdwl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163hnudoece.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ljmauwff.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ddnyfrcn.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163tvjmwota.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163gakruayc.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163bfyppvxl.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163gcyxukkn.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163qupdneil.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163pcvnhbuw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ucxdoyaa.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163hhegpoxj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163taahpgir.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163icnzdhow.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163fgdryjkb.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163loefghak.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ovsakihs.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163keqbvpvf.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163fljkogmh.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163ngtdzgbq.html

Ruby: exit 1
来源：http://www.xuanzx.com/163lqnjttbb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ddresicj.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163xaazzpnk.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163amqyblfl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163mwgsnlxn.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163lrbgboyu.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163hzghzzpt.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163dytmwffs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163gcgiihcn.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163iqbllgcr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163sziprawl.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163kinjgdwl.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163hrebrbyv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163htdpjfrf.html

JS:   require.main === module
来源：http://www.xuanzx.com/163yrtdepzw.html

TS:   require.main === module
来源：http://www.sxryk.cn/163boctrpot.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163jzccoadw.html

Go:   func main()
来源：http://www.sxryk.cn/163canephvg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163dktndahn.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163lbhduruy.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163adkypavy.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163usydtfwq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163fguxlguc.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xxhsdpvu.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163noykwuqo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163gkddsohs.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163kocdltyl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163nwdwjzpu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163zeeadtry.html

================================================================================
来源：http://www.aibaodan.cn/163dqrjtexz.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163zlseuaar.html

================================================================================
来源：http://www.sxryk.cn/163evqgypvm.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163hntwifgy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163oqfvttdo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163pprlyjmm.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163qlgsgygq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163uqktbdee.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163zscwjrrb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163oynmzykr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ijfaebgs.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163zmirnxdv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163twuqlnqw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ysbwhecs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163cjkyoicx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fycnlzcz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wlqijyrl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163oelzjzos.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163xjdigxjk.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ipxcadky.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163hvgxvuaz.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163mdaaoyjd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163vbhidmqq.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163twqxxewm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ykzhdnxp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163zloibpoo.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163lzgzxbzw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163egayujlm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163hfwkvbyk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163oauatyje.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163bpvtsnex.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dyoewzlo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163niglqqjp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163nmnpuold.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lcxvporg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163foyyablu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163djmsqwex.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163rqsdhrax.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163awbepusk.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163yjrhlrca.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163pmjrqbql.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163yblvgurk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163oyzhowre.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163kbiaquyj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163arvhitzq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163yhkkvjhc.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163kmgujbkr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163vwdezbys.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163wpmzgofq.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163eshfjzyk.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163vskkisng.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kpfxsktr.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163pswbmhvn.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ygkxtyzk.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ywxcyoxb.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163edowafon.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163voaodrvv.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163teuenpyf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163cxbgkdlx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ponqexcp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163yhhpwlnc.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163bdyhgjhb.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163appuwrlh.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163edmayxea.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163pgjywhqk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163zcqkyesu.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163xgadtwzm.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163cxhoaecv.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163sucizfcn.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fhdfhcvc.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ooncbwdr.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163wzxxwgsz.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163zgyddyhr.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163jesuzqjj.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ojumsbjk.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163bjgyozfv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163xwwfmsbt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163dfqehyoa.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163dkdasuns.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163hgotcvqm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163botdbrli.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163fvctbolo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ymslqeil.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163klcwoquw.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163fipwzmkg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163usczaoyc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ebramvjg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ceanzvym.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163upvaqhwn.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163vaobrlxw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163pxwrtcxy.html


<!-- 参考信息 -->