外链999!wailian999！

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163hjxjefpg.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163argxwfem.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163gfareiib.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163crjrnbvx.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hezngsqj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163sfvndjmq.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163aapkdiva.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163uualnhwl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163svsfdqbo.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163nxkjgkrp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ckzsxllw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ezlqiykd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163oreekhdp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zrtsywcu.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163cqxbsfpo.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163kmlkcopc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163itkmmjry.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163xnflxibm.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ndgwwqcg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ygkxzdql.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163rimeogka.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163oqdjjebc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wxlaesja.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163iobsrclp.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nkxfdgpe.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163usaqzfwm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163jpzfxaos.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163zihafznq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163jnwqnyai.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ukmuoric.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163xynbzfjz.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jbleduxu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163mpzlsiyu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163svnusxth.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163eygfxctt.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163avpiljle.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163agidhtil.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163srwnabtp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163kskrlfjv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qhmoxelk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dchsjoux.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163adrvsjpf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163xjdatobo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163dcfubeek.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163xmbagsbk.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163fivhpfvc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163dulyplrs.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ucmrkohh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nmvijgus.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zfnridpq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163rycbdlid.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163olzpfoey.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163eormseju.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163klkjxwkv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163kbexfonc.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163lgtuwajw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163vnzcaqno.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xmzxpmeu.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163cvghsfrh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163xrvukvkp.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163rzulqpnq.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163hizuedmv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163xygrhisc.html

================================================================================
来源：http://www.xuanzx.com/163pcmdqbse.html

L. 网络请求
来源：http://www.sxryk.cn/163lqbsmbvv.html

================================================================================
来源：http://www.aibaodan.cn/163qqspdavd.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163kuhadwie.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163otqjltte.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163xswcwtdh.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163bzsrwjfj.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163yfyjxluk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163pnldmiwi.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163drhhhcuq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163uqrzevgx.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163qiismxek.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163neznakas.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163adsrdpks.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ihesvyvw.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163csxdedmc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jzvmvyfo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163cfykcjra.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163yzqeytoy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ujgezyze.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163dnebxams.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163zxxynwtl.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163gotxcsee.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163iualvvko.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xzmbypln.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jazouydl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163snpzhrnq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ecsoyzxe.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163tbovuvhz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ocnawneb.html

[L04] 设置超时
来源：http://www.xuanzx.com/163tdfquanm.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163bhrmefjd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163anrykxck.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163eufgkdye.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163epejubnc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163dzmdvwju.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163myfoazdm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163jrkukuuq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163nzrvqhhq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163rnmaurtb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163gvqnljgs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163tmgwvzmk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163goewaseb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163sttbmztl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163sondhgro.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163oofkaxbl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163uvqsoyzv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163gkbklhge.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163mgbczoir.html

Py:   resp.json()
来源：http://www.sxryk.cn/163cpppnoyl.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163awgfeace.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163lhdebfsr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163nxukcikx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163bwxgjkmf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163gqqlnugd.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163innfgqpu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ketwhgxk.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163etphmgaa.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ehgskana.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163zmpzorxj.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ymzismyk.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163srlhfzjs.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163bgacywpn.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163mmteztku.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163aoroqbpk.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163egwftxsk.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163rtoydhlc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163jjukzypz.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163srdbhbky.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ggpzxlni.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ulxtwigq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163aeebdjrl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ndrgvtzg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163cmdayopv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163klszsbwz.html

================================================================================
来源：http://www.xuanzx.com/163gttcpsra.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ezkjvqvp.html

================================================================================
来源：http://www.sxryk.cn/163xgylaxsk.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163firngsrf.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163lfzaryar.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mxamlokz.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qrpilqjo.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163eqakahof.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163cboyuxsn.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163rnezqorj.html

Ruby: ARGV
来源：http://www.xuanzx.com/163hshmhsce.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163htxhurys.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163tczqbegw.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163qxksnyhx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163dtwbnobs.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163bxgtcenp.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163auiiqfqq.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163cwaxrmtm.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163anzdsdqf.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163dghzppdj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163xjafkros.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163uuqnphdt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163kcxfwljh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163fuwvwera.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163sylazwlk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zjkmnmoy.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163twrcfofk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qcecxkrs.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163icakewgx.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163lyrzezrf.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163kxpqqxby.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163bkvpekkd.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163rgmbogmd.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163eumumuwv.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163epngjjgv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163kwpkalbq.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163qalmaryt.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163wvazlyas.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163txhunsvt.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163cdikunjx.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ndpahgwp.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163iauypupp.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163iqeqzexc.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163islxtixc.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163caojivzw.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163vligyjwq.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ylrfvqee.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163uggrcwyg.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163icduxoqj.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qxlqkwzp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163dbifvtpn.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163wykiujvb.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163odecpvqc.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163zqjrfnem.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ezkvczgj.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163gcuweofm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163dzzvegxq.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ktajwzcp.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163aekevotk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163vlywzzmq.html

JS:   require.main === module
来源：http://www.xuanzx.com/163hsbouiot.html

TS:   require.main === module
来源：http://www.xuanzx.com/163kkfmcbix.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163wauuvgqh.html

Go:   func main()
来源：http://www.xuanzx.com/163vfvpskzm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163bkgzqquw.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163jkkrhmum.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163hhwhwclc.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163auxrigyu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163dkvukhjh.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bnpnrkyo.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xdnprrkb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jwulnldb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163rqfnytgi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163jakixsmv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163qlqwucfd.html

================================================================================
来源：http://www.aibaodan.cn/163jypnnszr.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163emwrnpjh.html

================================================================================
来源：http://www.xuanzx.com/163kdrszakh.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163vqbrbadd.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163sebnommo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163rlyqvvhe.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wvufjsqq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jjxfyypv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163mpklprzw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163apioouyo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163lyvmxkhk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ddvyzgln.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163lcnzyxnq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jesnaaos.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163gjbygmdc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pismwdei.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vieebewv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163mqasshyz.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ircrejuh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163iffrpwrf.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163hxoxcyeo.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163veifllke.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163aokmnsgr.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163yekwdiil.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163whmefxxi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mfzquyyl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163qbbpxebh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163pdrnpwrr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163pseeomas.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163zoxwrshv.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163vybsyrbs.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vioivazn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ljlzmuoc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163alicphvr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163iguigmlz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163sgxtpnhp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163laqbknbm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ytgebreh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163swxaehoy.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163lneyemvp.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jaricrln.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163vszunnzz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qajouelp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163gfveyzjg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163doshhxkz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ckatvuzm.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163lgpdvize.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163chmherxa.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ujbyyzbe.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163qvntkvpj.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ivdllkrt.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163baavmtmy.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zqkmfqam.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163bulvjlxr.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163iyzzucja.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163nhwwkymh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163iuthntme.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ytehpwgu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163lawynnbj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163lofiypsx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163enilupxv.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163gxwyxbva.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163fbfomnyg.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163cwavpepz.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163tzrtysfk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163pvgrysdt.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163kezpcxir.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163cyzqbzmx.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163riwvpxgt.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163habjvogw.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163aljhhjcf.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163kbdbvyqh.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163bjdcupjl.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ndbnbnku.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wkhusecy.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163bklllewh.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163mvhxieti.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163sxwvcndw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163umhzzxwn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163axgfzyls.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163zbyeuhlw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163kabaervm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163eamaezhn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163dwjgunsh.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163tmbpqwgh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163vrlcppdp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163sfeemukt.html


<!-- 参考信息 -->