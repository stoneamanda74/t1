外链999!wailian999！

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163oaeiznfy.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163plhfhtls.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163lqjttqix.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dckiqlqp.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wnzjnhba.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163kvknxzeh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163sbsgriky.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163nwuewudx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163hnfsgwkx.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163aqskbfjn.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vuyilong.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163olvzxxsj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163nbmecnqj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163etwuvjkp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163toqrfucm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163etjmbxaj.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163gisdmhua.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zirfdoah.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163ixvekeyo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163qatzzzer.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163mtteaklc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163fyayfrqo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dhjzqfrl.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163mwxlzuce.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qkckohhs.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163snzfjxji.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163jpmonttg.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163hsvhjpoe.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163fbigleyi.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163kkpnchru.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163cdvhohlf.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vmuvvxhi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163byeqdqxm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163dwigvryz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163afpytnxn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163opzoloua.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163yjrhuvdj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163gvzaqrmr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163pyfoojzg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163vvrdnufl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163fgcvfctk.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163wszyjngy.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163xbgnrwdr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163wodadrxj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163iychwtci.html

[K07] 进制转换
来源：http://www.sxryk.cn/163qulxrxsf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163snwizmrr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163sogcfawm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rygkrvxo.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lmfmwkfd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163hbvufutc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163szzobtsu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163uztnpxtd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163gzzouzim.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163jsbnpwmf.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163zyxvwyca.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ufminruv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163efijlldw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zerrvvrf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163uzmcbojn.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163orwhgjvq.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163bqxlbono.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163mrwyimpy.html

================================================================================
来源：http://www.aibaodan.cn/163svgjdhrf.html

L. 网络请求
来源：http://www.sxryk.cn/163kmizzbid.html

================================================================================
来源：http://www.xuanzx.com/163hnggrtuu.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163jsmjdjdx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163xqydwajm.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ljouyvzo.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jyzfyrtj.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163gxeynolv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163wsyurcfi.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ybptudki.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163eogslczn.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163deedgnkf.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ummhugkx.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163okvupewz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163gsihzpfo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163phwqmcst.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163lyajbhis.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163qomtgxdg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xehqqlkj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163lsgecskc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163mpdfptsq.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163ntecnins.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163qcxndxjl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ftfxzpta.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xkpvgroh.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163exudtldh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163aimkfjhf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163guvhdvpa.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163xcwefbwb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ixivteld.html

[L04] 设置超时
来源：http://www.xuanzx.com/163bfrkhilh.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163vqnbkqns.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ducshpcw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163rtsyfmja.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163rhmrhqzk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163nmfkqnwj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163wrggzymf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163fkfbadll.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163szmdimac.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163rtbzapcw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163dlngsrxr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163njkakoqx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163pjripllj.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163riwfiokl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163kferkuna.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163yblxcmot.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163khxxaacm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163gvuwplts.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163wdnnlcmp.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163qayjaenu.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163keffrfgs.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ymajdcit.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163sumpnhgt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ktmmfxmc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163lqozhyvi.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163bpenhyvo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163atzfwdtm.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163wnlaiyen.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163jeoymigb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163mtlstxsd.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zefdotcr.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163baxywhjq.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ybsxbedc.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163acxvuumu.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163xsftxhks.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163skxvinjf.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163vmibjekg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163yegnbrgw.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163iwgchywg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vtocymax.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cldryyyd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xpjempqt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163timwgggi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163acqyevtd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163vawmrkvq.html

================================================================================
来源：http://www.aibaodan.cn/163igtselnd.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163sljwugdl.html

================================================================================
来源：http://www.aibaodan.cn/163wqmxkgjo.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163xcssvwua.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163jrenmtau.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163jkdcnfzf.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163oqkmopzo.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163twrjfuby.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163capfqvxs.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163fnwebscv.html

Ruby: ARGV
来源：http://www.sxryk.cn/163prymjeyp.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163bbusodrf.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163fndqqtyz.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ypsmharu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163deqxoavs.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163cmomiaik.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163lpnxpzfw.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163pozaccht.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163gxolowtc.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163okykczqw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163brlgbxkh.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163jbwlqdix.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163xyblhjym.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163geyaafxr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pumdulry.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163nlrtfrfg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ismtejyb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163oasdrdvf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163watbpdem.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163uazzmttt.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163crbzrgdv.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163zzobemiq.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163qpzwvmkv.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163xuvhngiv.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163egrydmej.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163vzwwesvf.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163lipsgkev.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163extanpzy.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163yutdckdb.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163tetkjpem.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163oqlhmtpf.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163wwwwkvpi.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163bmocprao.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163uqgvaais.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163gxbymeku.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163jqlikrfh.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163gxrykxkw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163nquhcwgh.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ijvindvf.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xkdgxipw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163qniqslcm.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163hsfukfqa.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ioysvdye.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163huwrqtgy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163bikfyiyn.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163dgstwddj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163zrwjmusc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hsfoagvl.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jmtxiqhd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163epxzmrjz.html

JS:   require.main === module
来源：http://www.sxryk.cn/163rcxsqopt.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163bovkuzon.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ychqqfxs.html

Go:   func main()
来源：http://www.xuanzx.com/163amgcgfmw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163cupnefta.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163daixqtvj.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163bbqwthbq.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163btgkcxqd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163kerthusm.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163cgpldamm.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xuzisscx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163sdnpckln.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163qhdfcssl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163wqufnzoz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163vbfpymkl.html

================================================================================
来源：http://www.aibaodan.cn/163ievbgico.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163emyteggt.html

================================================================================
来源：http://www.aibaodan.cn/163oxaagpkz.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163iyhmpnht.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163rvmsswaj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hvansuzb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163yyoydrdg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163dljxzsrk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ajskuufe.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163giakacqt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163holeaycv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163sfohbnfw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ayaxfzea.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gdiunhsk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ohcngzcc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nvzcegbx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dabiehye.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163mavoskne.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163iytjcgks.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ygutgdku.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163yduqujzr.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163rzdgdelk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ewqapwgb.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163fmbwzcrq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163okhshbge.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gpglejsv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163eaypbuxu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163vpxytabz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163tzsejcsm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163wwphdabb.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163nmrrtnhp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bxztrtyl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ytirqota.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vdvbzqpi.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163yrqgjlzw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ohxrawkd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163oarbjjzk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wihtlpiq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163odghpdul.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163dllpvuru.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ouctzrvh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163vblwnszd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mubhetni.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163tllecgee.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163qegcwzvz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163dlpvgovh.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163xgbyfbok.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163shwmqxdc.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163xwhhpyah.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163uxgudonm.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163tzhfqtzf.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kvvsdsbh.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163dkeysbcf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163iiccnvus.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163nahcezid.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163cwqibaxt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163uqtsuiow.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163rlclfvsy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163bwbmnyxt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163pijqbguh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163fpkxtvbn.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163jklkjjsr.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ekvwwuxi.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163hxnzlhfm.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ylhebpjp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163wcpkfqsr.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163qiqdyyzc.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163jsrgnkbv.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163uwaodsdo.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163odhqhzsj.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zumqlsnn.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163vdghodqy.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163pkdumobd.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163hmcmmxvk.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163voymaotr.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163beyplnvo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163xzjzyfiv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163yitqncns.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163gmwbivzw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163kjtdwwkf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163jgmrpdbj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ucwxldip.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163yvfcjqqt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163xgnggwsj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163wabwojho.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163unykmzhc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163lclgakea.html


<!-- 参考信息 -->