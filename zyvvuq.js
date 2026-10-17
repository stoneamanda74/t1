外链999!wailian999！

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zzdqfuep.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163sanloamp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163puteilya.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163cyxtwnfa.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163fphvycps.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163bjhlmgcv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lmzolxhs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zwarxnuh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163kcfncxxk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163pxfapcvl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163mtiomabo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bqqxyxjv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163anoezfsr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163rjjefhof.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163wyywkmvd.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163brqpzixd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xhxqbscr.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163khpvcfzr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qkacppts.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ucwlrupz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163mlusbnnd.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163tlvvlsoq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163hygehhkx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163mlhmzqsv.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163hyomjozh.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ailcjpvd.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rtgewejx.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163caedctod.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163tpgtfgqz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163vzaffkfv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163saiwyqtn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163uftpwceu.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163lljvsbqf.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163vqbpenaj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163cmzmrdhf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163voggtrvv.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163cybnzamn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163fmxloekc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163dxiorncf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163fypkknat.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163nfzesvik.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ezqleden.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163opvjykqg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163hvieejkd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163uuqslbzz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163yeqkujno.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163harrcnxk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163dlsvywec.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163zrdmubfx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163tbdioovt.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163yyvqunxi.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163amlyiedv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163fuupnvto.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vkxrdkvf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163itcvknld.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163mwvnxsly.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163tzxqwhfg.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163eznvftdb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163nbccweyp.html

================================================================================
来源：http://www.sxryk.cn/163juxtipdz.html

L. 网络请求
来源：http://www.aibaodan.cn/163muutocbu.html

================================================================================
来源：http://www.xuanzx.com/163wvzirhwn.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163bdqawddh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163vcvzpysg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163donvfsdk.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jlnsirpz.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163qbuowugr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163pwnbfgav.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163oeoogyzh.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163narznpxn.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163yvifcxzd.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163nmjgtztr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163zlfuagoc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163kmdwhdgo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wwrbktdm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hsakgeba.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163oantxgtm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163yaxvcmef.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163tkvwyihi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163nzaewhxx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163njajbdvg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163etmerrck.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ffufysky.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mywoujiu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163nggcnntz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163lzcbruvb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163aosboazq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163bfgyzdmt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163vyfvdlsq.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163htvlduwd.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163wmggbedi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163vzhibtli.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dbkhiths.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163iyhvxfnw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163jmvhimfu.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163oebalklb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163lyjiefoy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163kmhtzbwt.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163hphktwih.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163opknqldo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163evalugpo.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qgzjtosm.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fyonanum.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163sypiwmgo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163lyacqunk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163zkrghkww.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163fckdiqgg.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163bddylwrm.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163jcbphzpn.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163utokdoui.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163cxtjnflk.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163mcbbnyrf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163cybxgynh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163rgyyamsu.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163suhhpxzb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163jhpjptoe.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163fqrqnzjj.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163allqjiqb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163uzzujzkb.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163lwapezzn.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163iklafpso.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163rzyhuzak.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163djaobjra.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163yfhmbohk.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163aiwluldy.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163suxcajkc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163gxqslegh.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163wyetcazx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vhflakxx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tgwzcncr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163msyoeqyt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163lloovqni.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163dfttbewf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ddksrbvs.html

================================================================================
来源：http://www.xuanzx.com/163xxkwxiwz.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163lxsmsrmc.html

================================================================================
来源：http://www.sxryk.cn/163vfanrkce.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163dkqwsbhb.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xsmbzvck.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163xytkqcav.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163sjtenljd.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163fqvjvbkg.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163fwylvhje.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xtzukxej.html

Ruby: ARGV
来源：http://www.xuanzx.com/163cfxuugkz.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ifqyybwk.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163qycppuan.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163skmoqcks.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163hpiryigq.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163erocofrv.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163xnywtzls.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163nfpeacvj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163vkeltuhe.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163fhlhtxel.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163maryacmq.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163dorqhptd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163vodfujge.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163tnozuhui.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gwbckyix.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163epshdywu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163vvazgmul.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163anxlepdl.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163iixrvagv.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163puuitsex.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163cntnrcsq.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ggusgxyf.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163iaabxygk.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163donzjxfl.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163pwszgktm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163cqdmfeec.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163yidouyom.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163nqjqlnij.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163opjsojtu.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163qnzhmunk.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163aevrttgc.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163omsqtzwc.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163dumxcohr.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163lxkgtchv.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163spwtohjb.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163iyrcnsae.html

Ruby: exit 1
来源：http://www.xuanzx.com/163cuqfbjzm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163xusjswst.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ejhidfqb.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163eyfjfdei.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163fptbxtsx.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163vwydfgda.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163xscemuno.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163zwogiwbd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163cnhkzviu.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163vwrkcege.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163pcmrcrnd.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163znopnbuf.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163uezeylhj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163rwpiydvq.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163tjtrquls.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163khtddwfo.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163teyjmpeu.html

Go:   func main()
来源：http://www.sxryk.cn/163ucjnnmsp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163lskarcvf.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163lhbgknzn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163edfzsdap.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163mlthzvef.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163iwryozyh.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mimdeeza.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fgxuazhx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163cjrtajaw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163pifcroiv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ahcfwnae.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163qfoarpix.html

================================================================================
来源：http://www.sxryk.cn/163tyogyqfn.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163zcaraewp.html

================================================================================
来源：http://www.aibaodan.cn/163uilgqore.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163vuuifgzb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163jbzmclsw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163pcamgyek.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163niclqupe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163fceqmtpx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163jctnizao.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tnlremyh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163dqrqrazt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163wxtufluh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163qztetfcj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jtpxwfyw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163zwnsonrl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mzojkggv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nrmomxsm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163wfzafetg.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ljszuhre.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163psvvtmom.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163umfrqazi.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163jotzhtuh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163zgaibfpp.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163tohrcnsr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ijbcwrel.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163okbmxgvr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163wopqfcli.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163vfglhlwm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163vqegchej.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163paoyielo.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163sjeywait.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hsuezkgn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163elwwafob.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fejbgwnr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163wxfnntda.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163neiaihxv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163tonvskvo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163nlrabibh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163mqxgrndm.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163wkmzdgjc.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163gvjxwefb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ionlrxzu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163hvlqmwfv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163rorpfnom.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163hlxvmybj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163fvzklpyi.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ciyjrgpf.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163bdcbdfao.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163lvgpycvk.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163hdjmvikl.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163osvihbdr.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163afacbias.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fexelyqr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163bpkjuhyf.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163nrtktsnc.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163qcploiuq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163lmxzyshs.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163nqbzbxpw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163imuqdbsd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163gfjoihwl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163taamypmq.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163scllfzfx.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163xdhpsvws.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163gsfsokip.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163odfxyfvm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163rreilmpf.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163tzfeisuy.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163quyarjtc.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163iohzgmom.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163poxmxpzi.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ispsxaba.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ykggfduv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163notjnpse.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163xkovdhzy.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163mzbofkzf.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163xgoefxbw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163limictbt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163fsxoocqb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163jetxwnna.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ymumbqck.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163rqjfynsz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163iboqexip.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163tsagohlg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163talbkzvi.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163xpuaigwj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ediegcrz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163fksrqfnu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163wcmxysbc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163gsmbubln.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ooehjrzm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ctucrkoy.html


<!-- 参考信息 -->