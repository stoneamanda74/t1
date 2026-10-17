外链999!wailian999！

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ssiaznzn.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163pcozvxjq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163kvkbnhpe.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gbxzebzo.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163pxcdpaaa.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163iuxiwnhg.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163csnjwjjj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163xznqhzag.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163rkfywvaj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163zsyiwqaq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163cltkonyr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163thlmsmmo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cvioivsw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163mgpmvakz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163sxmwthym.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163mtzumqbe.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163lqrtspcd.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163oqchizlk.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163iscysqyi.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163olnyhpie.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163xkgyftnq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163iksbrknl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pexzafxo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163uoypwebb.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163necfokoa.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163cpqicbns.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163rviisjwh.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163eieyvbjn.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163nghdlpwb.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163nqdglker.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163urdlhutm.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gxzvfbrc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163xqdfscme.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163hjdbyxlp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163srqvgsgd.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163gvgsubzw.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163dtlllndj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163clriuzse.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163tfbmtami.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tqitdoun.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jyuqqlij.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163uzgxuyof.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163bjntijgq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163cartlcph.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163xmmpsyqy.html

[K07] 进制转换
来源：http://www.xuanzx.com/163dznmsyln.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163eaphfnxs.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163meihuols.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xjcxpftf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mgqfzrgh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xqfnjkpb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163kkpgtsfz.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ymezxoga.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163upkhwval.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163sbzefede.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163gcbhwdpa.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163hzfuponh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hsxjazuz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hrwhiwsq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163ncrpjcap.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163hzldmnfm.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163zwqrizyv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163eaeesdjo.html

================================================================================
来源：http://www.xuanzx.com/163kiqcahqn.html

L. 网络请求
来源：http://www.aibaodan.cn/163idbvtooi.html

================================================================================
来源：http://www.xuanzx.com/163pwiuaatj.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ujtlkdhz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163kenrtujq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163cqwexikq.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163wnwgrpyv.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163bpzcotuu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163alqacjui.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163zfvdsujo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163wngmwdar.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163mmmqlupm.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163kydniibl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163maydczxn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163jzniaorj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wwjampoz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163hogxmrqh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163nllaumhu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163moyzxklw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163bpfsavrl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163shlzlllg.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163fxcugcyz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163czupptrc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163fccyfnwe.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163aytwmfla.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wtaszzjy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163wumnjzyt.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163dvgxqbgj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163scyfkued.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163fblzuyxl.html

[L04] 设置超时
来源：http://www.sxryk.cn/163hdmtaxqg.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163xtbhazfc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163oksrlflu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pmkwpuec.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yrxtggpy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163svgwusvo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163cdizsxze.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163eriddtbq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mikixjrc.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163qamevsgc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ehnhrehz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163pfkxjgim.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tpajzypq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163acfsnadq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ltwsqmdi.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163glilzxpm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163nwnwbcni.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163jbfawwkc.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163sienwfas.html

Py:   resp.json()
来源：http://www.sxryk.cn/163mivlorde.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163udzfaphk.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163odjryktr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163gjfedxij.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163bkxibste.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163xgljenyt.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163rtxvgbcw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163njbtruwg.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163uqkijplh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163dmqrquts.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163uihssjfv.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vxsibpzj.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vgoytxei.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ztmwssom.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163cakwfbbg.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163gnqnuaky.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163igothgza.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163pucktrtp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163qpcsfmub.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163mrwxvsml.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qrsvuswc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rqthzuux.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163keeqoozx.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163etktajhx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163hvfddcxb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163xzazwibd.html

================================================================================
来源：http://www.aibaodan.cn/163zqormzok.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163gugyonjz.html

================================================================================
来源：http://www.aibaodan.cn/163xwrkqjpr.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163bygxcttp.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163slkgsdor.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163mznnfvve.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163yqqjyknr.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hcttfash.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163dqnhzvbi.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163brnbgpqt.html

Ruby: ARGV
来源：http://www.xuanzx.com/163tqsxxtqd.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163aatphkuc.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ttowbexp.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163qkakbqei.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163deaaowtz.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163eovlakse.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163jbneevik.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163vyshodpu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163wrlzkypx.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163gumklpkm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163afnrgdyp.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ecfrgmba.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163drgpzhuq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163xhkvgyho.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163gljhvogi.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163shtxyiuy.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163lswfswyh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ofhoydtf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163nesqntlk.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163pvnjyarh.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163wzpvijrx.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163dhsdulny.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163typrdjfj.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163nxuhsdvo.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163iqghqrwv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163yeqjbuce.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163twybfhtx.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163nibdqtxd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163cxobfzqt.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ststiemz.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163rbfdebkv.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ocgvnozj.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163dshutgck.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163kiltdmyb.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163yljbamug.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163rfatjnol.html

Ruby: exit 1
来源：http://www.sxryk.cn/163viaeeqnw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163vfgfxskm.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163mebixjzr.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163cixuonsx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163efrcikdf.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163mfhrnswu.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163hnbhyznx.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ramysygn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163bxcjtiem.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163yyjrkiaw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ssefqhrd.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163klhksfsy.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163sifacwhv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163rszmjsee.html

JS:   require.main === module
来源：http://www.sxryk.cn/163hocwmqts.html

TS:   require.main === module
来源：http://www.sxryk.cn/163iiyaspdu.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163bshlrbxn.html

Go:   func main()
来源：http://www.xuanzx.com/163wlttmprg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163gjjgmygs.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163rptqsvxc.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xbpyrjff.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163wlzmewxj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163irdtemwy.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163relssljv.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vkvaxczg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ccgzsiiz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163rmprbufj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jkogzgqh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163kfukchev.html

================================================================================
来源：http://www.sxryk.cn/163tohaftyr.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163rgxokhkg.html

================================================================================
来源：http://www.aibaodan.cn/163ywnnkxlh.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163eddbhhxh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163iltmbwtx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163lbuhtmbs.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kwqxuglx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rzjuqyss.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163upjrekjk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ubgkffyo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163zwcpvlcs.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163gkxkbkgg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163gzngqimv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163varjliod.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ezycmpbn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163amteqacw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fwwvblfc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163yecnixac.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163nidnsliz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kxsuutgr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ggtlwdgc.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163zhenfwed.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ycifxugo.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ojvpvgtf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vdtsmtbl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163aiiafaov.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163slawuiws.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163esvvepdb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ifcrwrpn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163gwzcspzg.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163eizvodeb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163lwbncfkx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163riebaytb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163tmrlmmad.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kcgvwguw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163iudepafn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163dcibphyt.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163eguaabqj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163hmdgvaot.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163vkqvanfz.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163uswuliqo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163zhuaspuy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163blawukht.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163trrvuomq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163kihslzlo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163yqytyckl.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163jwjorvcw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163bqnxispd.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163mamsckht.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ufhjhubd.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ezqhljan.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zddhwyiu.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163pfvjufku.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163uvajtvdv.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163iyjtkkys.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163bybjihul.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ssmnjpvf.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163xpaghumc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ncckhopi.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163zgqelcgl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163yqhyflhi.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163bcpgijpz.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163iqgdxlod.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163husfadfu.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163wfgarpbr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163xvnxvrax.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163uilrmvfr.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163mjfpsbpr.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163pwcfndwz.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163wyeykdgw.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qavcdrgd.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163aepjshkj.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qaaoklqe.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163zavkosur.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163qeisksnz.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163wtzadvfd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163qyrovpqj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ynyiomok.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163ygktngbw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163vmgotomo.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163smmtafti.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163fafyhuiw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163uvoirfoa.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163oqdrfboy.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163wqtxoosv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jgusnbeq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163vqmawxoy.html


<!-- 参考信息 -->