外链999!wailian999！

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163gthywnna.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163shtfrzyq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163iarkcudn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163kupiehut.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163mofcgphh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163uuqlggxb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163vkjbtgll.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163eccpnein.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wbjmifvj.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163zkvkzupo.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163sosxpbvr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163gkuxypan.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163sdvgjiyk.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ihskutvl.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163htblvllh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163vannuqau.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163nctzoikp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qujakgkh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163nimghdim.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163vputmxxl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ypjlwuzy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163omlomyew.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163beepswrr.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163silagbvy.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163gyfbacgl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rlmhuqme.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163kkdcymmm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163cjpbkmnx.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163urvfoteo.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163ehptizzn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163oyfueehc.html

================================================================================
来源：http://www.sxryk.cn/163tttludli.html

L. 网络请求
来源：http://www.xuanzx.com/163fhulupvd.html

================================================================================
来源：http://www.sxryk.cn/163xsevadti.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163flnccrum.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163vlrvxhay.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ivtveqqo.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163celqlkyh.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163slwanzjl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163sawlzcjx.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163akwavmoz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pguzojkg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163hqmkiipb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ofnyatyv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163boafpunw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163bkbxevbv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qtyggbxq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163puhizavp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ziiqwlde.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163gbbozpjx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163gjrmrzqq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163vedujnbc.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163lxqdfagt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163plrktpzo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jwgfezkb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pekhztfx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163iychbwgl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163uhpgsirw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163jexkwwph.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163amvsfbsp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163tjtwvxuq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163aizpuefn.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163gljzwybu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163rmflizbj.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wwaumxje.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163kfiiiike.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163nlxtodqa.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163fefkshfs.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163zaodfgoe.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163qucjxmqb.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163lmgitppz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163hylpnclz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163jnvywjmf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163unoeqjdt.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163pfpbgkxr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163nzngfywd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163mtgfuiup.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163edtixssf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163hcilkare.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163btjrbfmu.html

Py:   resp.json()
来源：http://www.sxryk.cn/163gqfgpnkq.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163iepwqskn.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163bvfdjkzo.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163fbmepjcd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163adlaxdfg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163szkhzurq.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163dejysxke.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163mxvnpxhg.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163hgvqmhln.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163osaslplk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163rrikgohm.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163azertnqk.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163uwyqnivs.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163briguowo.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163indyztwt.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163agnoblbx.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163zaxbsfgn.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163pbutquso.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163rmrymqet.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163wxcsduhm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163suewqhut.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tqdhinrc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ooiotaga.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163gsgkvond.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163zruvuiju.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163bsfwakft.html

================================================================================
来源：http://www.sxryk.cn/163ajsgmchb.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163awateugu.html

================================================================================
来源：http://www.aibaodan.cn/163awawkqkv.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163uxbwfffk.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163azasjpgn.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163qwsxckxk.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163umyosggf.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ybszvzab.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163tmvmvanq.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163bdlsaomc.html

Ruby: ARGV
来源：http://www.xuanzx.com/163qrfgjpqp.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163bozfqmjv.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163xytnukzl.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ocjljwyq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163cyxxftqo.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163xvfpysbi.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163pkxfxnmt.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163siohgymv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163gcpdkzby.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163nhbioqwy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163pzktlttn.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ttefdfeu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163gijcfiip.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163aonecngd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wiupigea.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rgnknfet.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163wztqrrwc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163helwiria.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163khveivid.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163avrsgaxk.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163vadqlowh.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163jllztwxt.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163jbxedife.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163bmboogsm.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163tkawyfsu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163dtnbvghz.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163erquupks.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163clsiswhd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163pxhypnpq.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163tqmuxirz.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163xroafido.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163uzynrxdq.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163iintytfw.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163roxyjjha.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163qaevrwwl.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163rsdbltdf.html

Ruby: exit 1
来源：http://www.sxryk.cn/163lbwfygtv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163twueeldc.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163hvmcaycs.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163uqzussss.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163enxfmtyk.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163hpfgsmbj.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ockyhlxg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hawiuhiq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163xxhftxny.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163hhskhhnm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ykooeinj.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163tzmwaqxz.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163zzaxtqjc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163nxqyvjhq.html

JS:   require.main === module
来源：http://www.xuanzx.com/163oklpjjsk.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163aaxoqimm.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163cbhwpnxq.html

Go:   func main()
来源：http://www.aibaodan.cn/163ztuxggcr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163unrjcfkn.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163vwbhidur.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163mxvrfuhz.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ulsxrkyd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163mdnfaowv.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163tzwfqmvk.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tlpcosub.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163awpksywv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163tepsokda.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163pdaxiofw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163dzppwgap.html

================================================================================
来源：http://www.xuanzx.com/163cfwokddx.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163iwzqxzie.html

================================================================================
来源：http://www.aibaodan.cn/163fnasysuh.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163eymttuko.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163kwpnghmc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163rerptuyt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163udsraigy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163gbkmmltj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163hyqscels.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163blqnxgbb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163hdtxzyph.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163rnnhjvny.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163zlhkoioc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163umkqkego.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163geckbkow.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xwiwojdz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bacmahjy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163wcnencsc.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163qxjyltws.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163yozzglpq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163qetiplzo.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163akevyyik.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163jvwkkcrv.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163zwcfbriv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163hcwkkljj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qfsrxdzv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163utqbmgau.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163cgsrbegt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163fmswnrrb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163psjencap.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163tbujavdr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jbiqogxt.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163mxznfddc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163lggyzxkw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163frwjiwms.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163xnhrcolz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163dycwflpr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qrvuqbbm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163poisqywp.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163zgqefhrh.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163amqplono.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163ibfvpwat.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163bhcjospa.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163yxohroza.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163fsukzxjd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163yxkmgzcx.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163elygolqr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ytamdqmn.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163xhtsswqy.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163fabsnvun.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163fdlxajjc.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163klglalye.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cwwqfzpg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163iknlracd.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xfwhrwru.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163hlfmhudp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163bgaqyspm.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163svuwmprf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163mganofmi.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ezjdfest.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163vrillzfg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163tiyrxjqw.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163jscprqwt.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163mfdzxgld.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163xzewdkfm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ozsuyrll.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163yyyflhfi.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163oytoxqkp.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163ysklfofr.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163myzxpyuy.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163dtyoitfa.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163opuurxtk.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163zavofswr.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163wwvkpbvp.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163lzlmqten.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163idgnppqa.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163xsyedwlb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163svmygzmj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163oitphalc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163rppdbxgm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163dezsfgpe.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163gvhuomys.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163qgwgjwub.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163zvflesat.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163kpdkhqzf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163vxmuusbq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163emclcmvk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163htggxdgc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ldejrebm.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163kabtdqrf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163drhkrsab.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163orbegkaq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163bgtebuom.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163hroikdwq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163vijqfepk.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163sikcugwy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dsvlhucd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mbmprgyk.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ixvpcfps.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163cvcfphdt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163pozjszyv.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163phszgkzn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163geewgimj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163eyfijizy.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163htcikbaj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zxfviprr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163mvtxtjky.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163zygbuzmw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163sjltpknw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163fytfswvi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163njzhoxgf.html

================================================================================
来源：http://www.sxryk.cn/163cqlxvqyt.html

O. 并发与异步
来源：http://www.xuanzx.com/163pmhitfov.html

================================================================================
来源：http://www.aibaodan.cn/163jnyrsoco.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163eejtpjcn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163elsobihs.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163cqgnlawi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163rzmbrbha.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163bfynnvuy.html


<!-- 参考信息 -->