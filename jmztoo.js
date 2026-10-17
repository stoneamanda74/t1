外链999!wailian999！

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163vjgigkay.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163vmipisyo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163rqzddpzy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163jlhwysna.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163kjtmpybo.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163uxfvipxd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163wurndzxi.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bctnslzc.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163fzxrqepa.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163qysdmoui.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163bmlrvqkk.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163cgowmudf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163mvhptmgk.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163frnottgp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163uqlofqud.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ufqddmdd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163pwunjkul.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163layehpwk.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163cwfitoxw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163htorknpd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163qojclxvs.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163purhvwbj.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163rotegqiw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163konltsve.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163yhnsfyqd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kmwwerwt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hgfemlvg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163iqmiqmdo.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163zqcakfix.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163hwpxelzd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163wdgtbecx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163oufiapwm.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163vgpvbjws.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163uuwpbwyj.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163xdxluqym.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dgeswjyw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ezzbhiwj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163fnodberj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163whtkullm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163laewwqsg.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163qeugttyv.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163rpbxsdwh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163uoylbmna.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163hwfexmox.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pvitcgut.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ogfvuulh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163zxhoyxjd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163fbpbkioy.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163gjmgogsr.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ketcdejk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vamgindi.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163tgjfafof.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hxtqfanw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vdxrxyyl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kjdhmlev.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163xmhnngfj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163qhkvgleh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163dqeujfac.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163nvwnsrpv.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ppryomkc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163lgrbfnht.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wtpdvczm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163tbcegjkm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163tzyxngop.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163kqfptajx.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163xohjnolm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163rlrtquur.html

================================================================================
来源：http://www.sxryk.cn/163plsweokz.html

L. 网络请求
来源：http://www.xuanzx.com/163esbtszpu.html

================================================================================
来源：http://www.aibaodan.cn/163ifsfcmdv.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163dixagjsy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163omdiqhff.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163rohziakp.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163rcnibsbg.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163kxkarohy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163grvkvpem.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163hieivltf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163hlpmiwej.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163yabogoyu.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163klwlubal.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163xgpwylsb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163cogyeihy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163grzwmzti.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163rwkwxbvm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163zotmbfgh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163qhxlxuce.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163cunpugsa.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163gcuhbmyi.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163byrhjddc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163xbrokuff.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163sphkieyz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ahlonxhf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163gjvadfjv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163mmclvxwb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163snddlnhp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163dkwbsgip.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163bqdozmby.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ntqlwolt.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163klqkdffl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163fifeqayi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163aybmdgbt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ljnajqml.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163gemenefr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163etvdbkuk.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163skeetkxk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163izxfvrph.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ezutkweg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163irgguziv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163przlarfh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163sjpjnlpy.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xreereti.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163tpmqfnaa.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wanupkhn.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163aadggpmr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163xjhudhan.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163qraqovlq.html

Py:   resp.json()
来源：http://www.xuanzx.com/163chqielfo.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163mkjlsouv.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163pdvyngnm.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163zkutissu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163nrzsjyez.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163zbujvlhx.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ctgcbaqh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163tbkjkhjn.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163xgnbfjub.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163jithvwry.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163abdzbwll.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163uzvrpctt.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163yfncroth.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163mmviehzf.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163lxmwdsyc.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163meqtnqbn.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163rcebgcjf.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163modqsuym.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163kqklyaxf.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163flgxfery.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rzlwyfik.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pujtsmxw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163rwpqfgiz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163eoecdmxk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163wxnabvdj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ucknyhwo.html

================================================================================
来源：http://www.aibaodan.cn/163zfugenme.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163utsxjfld.html

================================================================================
来源：http://www.xuanzx.com/163wtqcifiv.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163dtbelmxk.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163fumvgfqu.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163tfacxwdp.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163glkafjzd.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mydkqtsy.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163jpkgwvun.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163omgulubv.html

Ruby: ARGV
来源：http://www.sxryk.cn/163weppkzzv.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163svfldkfc.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163bptrikzj.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163zilyxypv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163mfbjprig.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163tpafywkt.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163zirhrmad.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163blxuaphj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163hcpsxsyz.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163jihjfkgk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163uuwrmdpd.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163gnxhbeaa.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163mrmzzexh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163rwvhdbnn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163sunyqbme.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lrpzypag.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163wtgluomt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163zkuzgitx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163gavwyhbf.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163rfcyyuij.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ggudxdsx.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163umngzsdn.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163wzzyqlmr.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163alscluwu.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ubjelejo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163oxlmfjoa.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ctkffigl.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163nfptzogt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163fyugacpq.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163aliipnxe.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163nxnzjzai.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163qyndshzt.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163geslcqgn.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163kzpzsevs.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163zuwuiotv.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163arxengmt.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163gbgyhmhs.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163hnehtibg.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163jbzfnloe.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163bzogqhxm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163azhsdgzg.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163hmmxvglk.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163vbneitce.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163rwrxmylh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ztcrtgaz.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ojobpplg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163myorphtn.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163nbpejqtu.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163zeprctqb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163cioimafi.html

JS:   require.main === module
来源：http://www.sxryk.cn/163uszqckud.html

TS:   require.main === module
来源：http://www.sxryk.cn/163mtjekkst.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163oohcvevf.html

Go:   func main()
来源：http://www.xuanzx.com/163xpxbdbsq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163tibbzmjl.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163llqgxokn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163wzkcbvao.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163nyxtumpe.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163lcmtvxxg.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xvzuppir.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qjvtlbwh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163lkyoridy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163vxqndjik.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ivmyscil.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163khdsniml.html

================================================================================
来源：http://www.xuanzx.com/163ftmnemku.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163amrrdaer.html

================================================================================
来源：http://www.xuanzx.com/163mprfildu.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163zhuiqftl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163rycikvvy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163qdyrnybp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ftpafzpb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163oxxzbpzj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ysjibzte.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163bqezisvy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163uqudxbry.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163qhnxuzch.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163cddbshpd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fjstaviw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163yvtbcyiy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gwrdpykz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xueerbeu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163xuzsqiao.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163nltldqht.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163knknmwqx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163bjpgpirl.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163nbmetbaf.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163cizvliap.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ueepvksr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vutznzew.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cwbtiird.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163batohyuh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163hcywcmqs.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163xmodmzlr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163jrhvilgq.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163bjzcsnwg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163eigbgagn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163qolidlvj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hwpwtzsb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163trodehim.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163zhtitvpz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163fnbckjwn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163kerzgdtd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163uvdkynhn.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163vmsnvoai.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163vozhhzua.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163dsrczlqn.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163pklikvij.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163tsgayrjm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163cbihlewy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163leqrtvim.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163cqrikrwe.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ezkyysku.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163djukqgpb.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163wdifdcqs.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163xlytsgfl.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wbxitcgi.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163knqxxmxf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163fpqjdaal.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163boonmphr.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163uwinizcl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ehnvojet.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163cwxhizza.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163pntpxxep.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163qtorkiau.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163gfmixihc.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163smehwknx.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163kzcmtgxx.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163maaiyebb.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163vtatsoen.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163vckqfvbt.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ukrzykav.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163xrnjebyd.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ytojlflp.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vphdouzk.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163fegixcew.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163chhvkegr.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163xhytrycc.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163adweeggu.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rihnggnz.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wsrfbbsy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163eyafljdv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163hdzpkmhe.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163hmhdqjmy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163hfkvfkco.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163owctnnhq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163almunnwa.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ggrallad.html


<!-- 参考信息 -->