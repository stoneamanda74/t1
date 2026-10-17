外链999!wailian999！

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rrgxvxqj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zubnajrz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163sotmjzxc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163mmvehyko.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163fjoowuzl.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163cwvzspxi.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163bguerntr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163yejnixoy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163tbcjzzmq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163prsskoxp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jsbbjnxj.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163dyuuuorc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hykfrgds.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163hulmuvlm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163lvqzwnyz.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163dztrfnvh.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163nvxxzwld.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163kaqxvtxl.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163sdbpxziu.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163fapdkkut.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163topbydmg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163lqfjxpwn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163vsbemgte.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163ohinezkt.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163aurvmouu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163koarlkrg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ujwvbjwx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163kmtrtdle.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163dzzzufik.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163ypvffvco.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163jegxvxlq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163cbiwytuv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163natyiiak.html

[K07] 进制转换
来源：http://www.xuanzx.com/163plewxbwh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163sxamwtsz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163ymnhsznz.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nqegjtea.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163bgkhxfkq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163xohjrxit.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163qcxujtea.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163wnkhiilz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163zeetbbmd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163wfvordws.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163hafsjirf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163ionbhimo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163gjnxdxjp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163lukyyeni.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ebouimsc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163btjusphj.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163wwnoguwd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163fupjqydh.html

================================================================================
来源：http://www.aibaodan.cn/163eaayfycc.html

L. 网络请求
来源：http://www.xuanzx.com/163sgjsekpr.html

================================================================================
来源：http://www.aibaodan.cn/163msmghrlw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163caanidws.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163bcpeobah.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163rcnudhrz.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163irzkqlbk.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163hmxukvns.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163mjkgqlxk.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163hkhfsaeh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163skestcen.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163nxmucxjf.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163pgisdguh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163vfruqdek.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163chtzdupw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lolwoewf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bfzzloik.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163lulcovsb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163dwhydsdd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163waihgjzg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163pwmdzhnf.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163uetsumff.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163cqroogmf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163isrzoaho.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163joaksvof.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qhkcssik.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163aufetype.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163omgllnpr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163zcdvvgqh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163hlqbphqy.html

[L04] 设置超时
来源：http://www.xuanzx.com/163cjficfso.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163cqumjrqx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163aeivbbtz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163xxghgcgt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nfafgvkk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163kdpkkgth.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ffnwewfm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163fbstdrwf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ucocmtzy.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163zglzdnoc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163vhqabruh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163xbgioouf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kchzyogh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163bmhecqtq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ohorolcb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163hcztmkwr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163znynvdsl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163yiugncig.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163vhplneew.html

Py:   resp.json()
来源：http://www.xuanzx.com/163rhhakabm.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163buujmxzv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163xcikurbs.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163iutfkmpo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163aryvktph.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163dwwlzhwv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163hehgoaqe.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ywhywgwe.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163bmcragqy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163bktmfbjn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ofudzqwg.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163alxxqulq.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163azhqvhgg.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163kppzwapb.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163mgwpywmq.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163emlzejqt.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163hqcwbxbl.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163zdmwrxja.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163byifrffb.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ngmrgrln.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wpqnuqpf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163oiwxeygo.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163nahdwpli.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163vdvglcar.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ttcxvqcz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163exiebguu.html

================================================================================
来源：http://www.aibaodan.cn/163gvdpgteq.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163hjpbyegd.html

================================================================================
来源：http://www.aibaodan.cn/163chxepape.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ngdkaxlr.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ymvojcwh.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163yxwpoiaa.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163jmjrbiug.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163wsczqcrr.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163btkbyydd.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163hgemoqaj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163zsajpyve.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163hnobffws.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ojlhpjhf.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163cqqoknos.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163dgncxnoe.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163rbjqasvf.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163tfchpvzs.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163jgtnjxbi.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163qvrhdkqc.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ezdfiaqz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163nvlnqcoc.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163fvtsmnve.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163lfqmerxf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163wcdnhgzo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163makwvnpe.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163kaeoaobr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163roayjnph.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vrxyozxx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163tvlsbxpo.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ygstcijm.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163idmclvnt.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163kgmsjrwm.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163gtcxpoue.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163mcxsqnuy.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163jllduhsn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163osscjbtd.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163gtowkuke.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163xdnietcd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163wcvhlpqz.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163hqwybhfi.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163edvqhevr.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163kmwkxfmm.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163piuxctze.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163walwgzpz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163mwksbfln.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163fyzgjfpa.html

Ruby: exit 1
来源：http://www.sxryk.cn/163zwsxibwi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163pejtsvaq.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qkgaqnyr.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mqfkiqcz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163lfgmgagq.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163iklguxjq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163lhziigut.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163qvnwcgwh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163nbadhcaw.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163heyfcnqz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163yggfofuc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163pljwtuvv.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163srnfbbgh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163qxibrwdv.html

JS:   require.main === module
来源：http://www.xuanzx.com/163sntrvecb.html

TS:   require.main === module
来源：http://www.sxryk.cn/163lmyfadlw.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163vismcjas.html

Go:   func main()
来源：http://www.aibaodan.cn/163ikjznlps.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163kbfkfmdv.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163axysnjkk.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163zqsgtunj.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163hkzbbwfy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163spyzqxak.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163oiiupvup.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163aizofmwt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163qmnialzs.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163pzsmygsn.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163unvuoqxp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163csrebmcz.html

================================================================================
来源：http://www.sxryk.cn/163juwkwyjh.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163uazppnub.html

================================================================================
来源：http://www.sxryk.cn/163vmislsck.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163etxgjokd.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163xrhpjtkm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163pmpcxknh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163aqbgtykj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163pxvdxtho.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ixzqogsv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163buomvbst.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163uvporpws.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163mummkcxg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163mfougmyd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wzafcgis.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163kuskyway.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ejhrkgqy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ysozouyt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163riycrwuz.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163eirjpnpi.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kdrfqiao.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163erbjvysu.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163azkqgwua.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163epeefews.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163jybwozqy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ievwfkyk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163amwgyamy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163aomlrqzc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ydhyukma.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163fvnmckcu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163gzbmwbfc.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163uvajmzrv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163mielnikq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163mqnvpqvu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163pgydmntb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163nujodbeq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ifyvsoyy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163jlwiadqv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fernpecz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163kpwgaait.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163jhjavtrr.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163hdfxfhfr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163jmaenjmt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hqryockn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163julktuzu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163xrjxjsut.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163lfenktrl.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163krjmxhay.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163robiidai.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163iuvpdweo.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163sihrutsl.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vtjkjdgm.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zyjqnfir.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tpmnwmlu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163xeizvbnm.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xkfgsgbp.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163uqxcrrgo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163bbkqkdyd.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163rnkybqbh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163zsqjxdaj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163hfqjhygb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163rrnvptmx.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vtqmtwrx.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163togsobiz.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163qglzsyux.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163tezkgtkn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ogynsuqc.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163kljtbcmv.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163spbzmtni.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163alapannt.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yvrvwqsk.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zwljfuvc.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163lcvyapzp.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163mylnifla.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163kybqzlnp.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163rkraunoh.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163lhbdumyi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163phssqgzp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163romwgjhj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163fuxnwmeb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163nrexvggc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163jrjburse.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163eojlmjud.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163johpqrct.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163nhbuwnyg.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ninufmcp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163xqtujmhy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163uboqdpui.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163bquzeffi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163xnxfmbsh.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163dnrpjlwb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163edxfkebg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163mljvdoth.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163iiwkyflg.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163vecymqkw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163fmawkpyq.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163tyghfvok.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163nncbghvr.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ojawzszg.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ldulvlzv.html


<!-- 参考信息 -->