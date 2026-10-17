外链999!wailian999！

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163yboeikie.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163uxlzspqy.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163cqjtmunp.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xqsnfyid.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163rijhgfvi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163diynnutx.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163cplyxzpg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163oleygcxe.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163pendaizn.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163avxidpon.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163bshfxadc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163gmxbzkkg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163fpbztmje.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163yzdlvdkx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163tauokdqf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qnhqfrsv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163jenawzsg.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163deqpxvdr.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163xvbmlinb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163ehkwkawq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163uuzdbbaf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163elbqwrlc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163gqyehonj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163zksaaolp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163alevurgr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163yxiyznlr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163vnroooer.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163jlbraoou.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163hdeoqtyl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rueqbagp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163caivnnmn.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163xbvelmep.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163voqstwnm.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163rhdkoaob.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163vmxfgbia.html

================================================================================
来源：http://www.sxryk.cn/163uyundvkm.html

L. 网络请求
来源：http://www.aibaodan.cn/163iqnktuff.html

================================================================================
来源：http://www.sxryk.cn/163nzfrlonr.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163hpexrwqr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163khmjhkih.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163tjiwozbv.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163uptpnmqm.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163tvrbgydh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163umytajkh.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163tqbscrwr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163dalalzmc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163kiozkfhj.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163qkcktijb.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163zwnbrhni.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163fjuatccx.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zvllwquf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vvmvtbyk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163faqeoftg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163sxyrmhwr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163twofdbvj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163jbmczaxv.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163dtheblia.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163tmkvkacy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163saexnxda.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163eyakvvfe.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vusghqcp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163rstajqqo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ivygqahf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163rhalzodc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163fcubcude.html

[L04] 设置超时
来源：http://www.xuanzx.com/163lnwackrf.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163hkoyyvjl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163hmcpsnpy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163lyqqiqnw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163eaiuhznq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163wzarjxzd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163wljuasav.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163dcanqvti.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163nysyjxqw.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163xwwhoxdq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163pnuvwhoh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163irczelbn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163icydkiyd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163bgagzoow.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163hqvjedei.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163eilmubdt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163lrupcbqz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163imhjortx.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163qxkroaps.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163hxupfksp.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163wmogmqlj.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163howsgkcg.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163suuefdny.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163noadmioy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163krzyypks.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163rxnydzuh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163mglnafmo.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163jlzmdwje.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163jomsurwl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163svltliib.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163oglbedag.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163yfriplsz.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vteeikrx.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163gyzgmlzn.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163mgszydzz.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163vmkvrria.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163sqebiktr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163jfbxsafw.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163zuwjfzsz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163paesmzie.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163uzlyjohf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ctnllphx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163wgdtglnq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163reonfozk.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163kiamhlgc.html

================================================================================
来源：http://www.aibaodan.cn/163dxohmfoh.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163jiijgytm.html

================================================================================
来源：http://www.xuanzx.com/163dqefgrih.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163dekgrcln.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163sxyonqfo.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163knuqemmt.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ouuyikal.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163utoynsht.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163dkmkybpd.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ynwnvkgp.html

Ruby: ARGV
来源：http://www.xuanzx.com/163prsgzolx.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163dkkkbcgc.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ftpljxsy.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163cqvtahao.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163zqzbzkpo.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163pawsldmb.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163btqmdbmy.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163pxukusjv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163pxzgyhpb.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zwbpdbvl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163hzqwvzyt.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163cbngwmmi.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163rqnwcvag.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163rwpoofiz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ywqfzpip.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nqlwnlcv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ujavwujq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163dqdyugil.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163oshfoint.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163cpkwksft.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163yrtwvbsw.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163xdxcjlie.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163mijiistw.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163thapqgfu.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163tmjslczh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ufaekfff.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163micnnfmr.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ncetqxdn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163jniotegd.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163dejadizw.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163actfqljg.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163xjbrtfqm.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163rvjpxchy.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163hswwesex.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163nuxlbbmu.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ipsvsozs.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gyqfanqa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163enepvumw.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163jacbughf.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mvpiumqg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163noznkfai.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163jssomgqr.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163vezranjm.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163nsbcunke.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163uxqbzrwj.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163adevdiom.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163abkeezen.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163srarixrl.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163fnbbkulg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163kxbgrhbd.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163nngvbrzc.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163gryvyywm.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163jfzzilmw.html

Go:   func main()
来源：http://www.sxryk.cn/163pdsaxdhe.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163exsngpim.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163nizgyscd.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ppffhpay.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163wyaoijxo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wvsezqzl.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163kziwiblz.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163upyaytmh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163gyjvagvw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163euyclmma.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163fyuejibl.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163iprngkhl.html

================================================================================
来源：http://www.aibaodan.cn/163rydqyiux.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163xdcqcujv.html

================================================================================
来源：http://www.xuanzx.com/163cksyelhp.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163rwnpaoku.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163lyxmjkne.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163vinqhjyn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163tfrhwjap.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163akfpqjwy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163rcncoxhg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163weuklqlr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163rztqagah.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163wbesgtgu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163kmtdczke.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zrfzglko.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163peylzkor.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xgjxxiea.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zwtywkkd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163joselhwk.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163mnmlgiiy.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163nkgfepdk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163fmjuepvh.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163tfpdmnwx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163bxonyoho.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163zzghyvyc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163eckxgkjz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lpssdsqu.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163lzgcbtyz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163qwgnmryj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163yfettkon.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ssoqlsgy.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163quhhbhml.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dcwfhrem.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163fsmclxcq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163liwntwhm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rxpjeubc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163qevveysg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163jjeqourr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pvjeaege.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163aodsxqeo.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ekftybfp.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ftkyqrqv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163vsalcbej.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kjqomsli.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ixcqasaa.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163zifpvxbf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163rwghtioz.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163lhallfez.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163lnmcxcbh.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163prpybhwk.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163mhhyhanl.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163kxtcvjsh.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163snsjgbnj.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hyryzhve.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163pdedzgka.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ewwwtwxy.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ykconiio.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zazpntaa.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163hcuozina.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163accylbym.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163stafvfjx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163fxwtfanc.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163jbeyjrvf.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ibpjlpzy.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163txgpegfy.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163xtegjosz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163xkytnnhe.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163xrvxrjig.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163zofclays.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163fwqhjqvz.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163liicrsaa.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yfncobpq.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163jmytywdp.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163omhqtiob.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163iaxddqju.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ijhrrdae.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163fvcinvhm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163trvmgjuv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163lfrszugw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163hpehonya.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163qejpewdj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163dfvmrtuf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163tgowjqce.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163vmvtdlhl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163maylbfzl.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163zuphfobl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163mkfcwdzv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163nlqtgyqa.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163npagbmuw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163uckvqqjo.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163jvtdxtzb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163oeejbvkz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163sdldjush.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163eqsmouws.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163szbehqkd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qugdusss.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163sdebshez.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tkeqrmic.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wcoewdxz.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ttztvbev.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163bpqodadk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163cxqgbttj.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163deuejndh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163dgtimsmc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163kcjfpprc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163yefiphnx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163obsuszqy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163kraaejpd.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ewclcsvm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163tostjzca.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163okgioqdb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dpkescpf.html

================================================================================
来源：http://www.sxryk.cn/163usppsfyn.html

O. 并发与异步
来源：http://www.aibaodan.cn/163yqsvyxfa.html

================================================================================
来源：http://www.sxryk.cn/163fjmgilgh.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163bwpwaycx.html


<!-- 参考信息 -->