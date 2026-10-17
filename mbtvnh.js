外链999!wailian999！

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163rdkkitzy.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163lxusrfin.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163kdmyyirc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163xbixdpbp.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163sqljinhq.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163riawgcyt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163epdqurpu.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163kndynpwu.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163dwnwhzrw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163liwedrgi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163seznbtnn.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163fpmfgblm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163elglsfxi.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163tolfcleu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ymtqrgtt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zmtepatu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163mtbnlfjj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xavymqtz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163wuenprxo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163tdjqbeqg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163xswxzbab.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163cqgxgaxn.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163jvmzaefj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163mszxigyw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163fasdvzvu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fqjkwbeb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163nnwnuyiw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163wieguxud.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163stlaqhov.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163cgixlivv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ahzspfip.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163wxwzncep.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163qrflqbng.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163rklawttd.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163spxgyrxm.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xziquarl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163zfrtllhb.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ouuzpvxu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163wtgxtwwb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163zkbsdlyz.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163nogkehuw.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163mzionlyb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ldfbjwvj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mgovbwey.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163krjmkyzp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163lhqqzkfi.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163tjwllvot.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163fhdbmuni.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163yjubwnsn.html

[K07] 进制转换
来源：http://www.sxryk.cn/163yoemvhou.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163uxghidrr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163kbgfwtzs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163uxuarszw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163thhinghe.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163uiyauenp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163gtsvdzcn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163yeklrfjb.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163hvjfjayx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163pcyhruzb.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163wcklqvib.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163dnadmqmh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163uuizhgdb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163doemkihx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ewjasgyr.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163jmrrkpxk.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163othpbsyt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163qbqwaurq.html

================================================================================
来源：http://www.xuanzx.com/163vyfxllmc.html

L. 网络请求
来源：http://www.sxryk.cn/163oscceedh.html

================================================================================
来源：http://www.sxryk.cn/163jncdypgc.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163hwewwkkg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163yyaozlsy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163lbvyiipc.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163hrabqccu.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163xhnwnxou.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163jguiheuw.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qtpvjlfw.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163qhipwcbu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ndsuhxcs.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163werzpbqf.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163nqtxnkgn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ffvjachu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163elkbxgde.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163hgflncmh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163pihuqagm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163fihlqsim.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163rhyrnmqv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163fysfrmit.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163paiyvagj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163yduttjhn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163cbgpeqbp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163dyoyrpbf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163owpifrar.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163mnbsufdt.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163nywoiplj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163motydzop.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163mubaqfcb.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163zdlppumn.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163kghhnywq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163dkinmugi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163suxcpetm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yzmxcrcg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163wpnsxmeh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163zodyxvde.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163xregrovb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163xcjrhdbn.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163egeylxhx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163dhlzhbyd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163oeoemolc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163dbmctfdy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163myzpryow.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163zkukjnom.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163tqpjhnma.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wgonpviw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163avdvejuk.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163gpjrkgra.html

Py:   resp.json()
来源：http://www.sxryk.cn/163yvlfyqod.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163kdjysvos.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163budsraxh.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163qmhthhfe.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163gnxvqmiz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163qynfckxt.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163mbbbqjak.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163tsosvncn.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163peckwgfi.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163tyqtvlet.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163sqvvtpva.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163idlkkngp.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bstrbgpe.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163byjkhach.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163jqrdnygw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163pogguugy.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qsmvipmr.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163uuczxqex.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163yvkipigt.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163prthcyiq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163npryezrq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163whfwpaho.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163pirbeqia.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163cmrslaqa.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163vuseqxto.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ukriujvn.html

================================================================================
来源：http://www.sxryk.cn/163vnfqgtar.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ktbfzscz.html

================================================================================
来源：http://www.xuanzx.com/163tsaqpqpw.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163gevuihyg.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163cvijekqa.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163pfoufcbo.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163fzgexbpl.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163alxswiln.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163fpnhcwfr.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163qrymqgds.html

Ruby: ARGV
来源：http://www.sxryk.cn/163aefzgfxk.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163cjvtfilu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163vfhucipe.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ryrjyvte.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163fjfyuhij.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163fhjvtfkv.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163jxphgyxu.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163buynwtox.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163iybugmme.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ykubgvdk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163esozcnmq.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163bujamggv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163sdlncqhi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163eoaafttv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xygpvnsu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hmqhenbp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163xydzgdmm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163xfwzdkcq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163cpwhuzza.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163slvzzpzd.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163jvaoylra.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163iyvyxxpn.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163homyoubz.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163achdpxqu.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163qjqbdrvr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163xpbzhlby.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163gwacnxtr.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163bsfeukav.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163euthhjlx.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163gqhzpwuk.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163eyawepqb.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163rqnprpsk.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163iuuevmbs.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163xrroyobo.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163lpnwxcwq.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163nkzrzkgr.html

Ruby: exit 1
来源：http://www.xuanzx.com/163qspyyrst.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163tdpwynwo.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163oywmrgib.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xkmhklsz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163qawuiqht.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163crgqlvkw.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163zocsgrdh.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163cbkbrgkr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163kovrcrxy.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163rtydhefk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163pkeglfvh.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ztgeubyl.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163gsosisbp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163gdojkgau.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ykjlvycd.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163idzcsbyd.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163oarshbxo.html

Go:   func main()
来源：http://www.sxryk.cn/163nnvmvvtq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163idqsazrv.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163tagwbyjc.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163xbxzrsds.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163fctvuwbb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163eylvmwlx.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rllapnvq.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zagrgdqm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163fndtddzm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163eknrcnbe.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ghygqvfd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163zlcuqhyb.html

================================================================================
来源：http://www.sxryk.cn/163crhqsysc.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163acsduewf.html

================================================================================
来源：http://www.aibaodan.cn/163pamblmvy.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163vykxmrsm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163dityqoop.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163liaosnqw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ulhftgeb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163spdhsmbd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163rebsnaav.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163qzkmdvjk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163syijjnkv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163cgfpeeyb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ssvgchun.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rgerqvly.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ipvyojqx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163srjzthgx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hzjgkcgd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163mvvgupsf.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163qcixtzmi.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163idvapfij.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163utextelv.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163rhgrjwso.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163qlwxdqnw.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163kqbhrwvm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xopajeqe.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163kqbzwmrg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ewyysxbb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163vrbgijab.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163vzdjsenf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163rwpywcre.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163fmthvily.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163sbnflowv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163zfaishlj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163egltijjo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163pptlthsk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163iuugyckv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163xkxshava.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163mpqeyzat.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163xonktmue.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163idsedmbj.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163zvccniga.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163mzsyoiqe.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gicvwarr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mtivdotv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163dkscpbut.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xhvmisfm.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163fecutaix.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163wwyklrpe.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ggbvyvqt.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163eybsuhai.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163aymnvsvc.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163efcafmyx.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rfkyeqgj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ezzeorrb.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163yinbgbzg.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163uzmzuovg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163maosiefh.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163menbyadb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163pxuhnbjf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ekfhxasu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163fbbaagyd.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163wlybaqur.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163byevpmxt.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163dqovcnfu.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163nayelnly.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163mzjzcceu.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163wfqvkgcw.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163glcstnfw.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163aksmuqtu.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qwmncdob.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rpuzaczc.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163rhrwnivw.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163rcuapapg.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163kuxgjlwi.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163uuipxywh.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163vypygvzk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163adgzjsav.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163mykyvzup.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163tnkezkfg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163eohfkefk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163fkktmhqf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163vgjaiqiz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163kvitunfq.html


<!-- 参考信息 -->