外链999!wailian999！

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163vbdtareo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vredwmnw.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xjijmowe.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qfxvflsx.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163moqqljlj.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163lemybzhc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163dmggregw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163pczsqwlu.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163qxcjvnkd.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163lvcokoev.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163yfimpskj.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163lgnmwycu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mkgqomyu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163mifpwtsz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163cdnbjise.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163hwgiksnn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163vnzfissk.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163qihjsjhv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zcqlwjbh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163avvshdef.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163bpmfigkg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163thepjxqv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163apfuailp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163obveaeqq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163rjnuftpw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163iebvivxn.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163xtjobihi.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163zpsaiizq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163xiuqdopy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163iacnhljr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163guqrqtmz.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163owmzbgqd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163abjcirfe.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163cidlosnw.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163nhnrjevd.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163pitjnczt.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163eucrrrli.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163mrcslmkh.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163tvmbnzsi.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163iyhybcrd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163puhdqaov.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163uvexnhda.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ibicsgac.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163yiowcloq.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xnehefxo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ioytfsyk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hdjguhpa.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ynyepcvk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163azwlcczu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163bfyearjk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163fpwzvjxk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163tnnkkxjk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163ugqqwnrb.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163oanxkyis.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163hsaeaavx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163wdltyfch.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vsdgrhfu.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163bwajeqmy.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163tpalbgzd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163idfijkjg.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163pbzksoje.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163gkaomeio.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163qztjbarf.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163vmvrcjxw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163vultspsl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163gboaqlru.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163guotmreo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163mgesqlpx.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163kqtjzyfi.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163eqpwjvgz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163hbckwurh.html

================================================================================
来源：http://www.aibaodan.cn/163dmnhkjzw.html

L. 网络请求
来源：http://www.aibaodan.cn/163dmkxrnam.html

================================================================================
来源：http://www.xuanzx.com/163brrrmucb.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163zytxrwsu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163rdmxocre.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ialcjdwg.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163dlbzmexd.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163lwliqxlh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163dvyvlhkt.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163geviyrwa.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163svstlwdd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163dmebxtui.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163eeetlsfr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163afsxwjii.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163hwabsmaz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qdkclcfb.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163usxhnlow.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163dkcmdcwv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163dpfeufdi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163lvavvcjd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163nvcyrfwa.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163aqpayduy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163dqdsbmmy.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163juuzbpxd.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163cuboyqmy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bfgbjnmd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163cksgdvdd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163xtqfutca.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163qjatpgit.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163hohguwuw.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ghykdkfo.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163jcbfdpzh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163oovheoih.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ccpnxcuh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qrjsnflw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ztneicba.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163zfoyqcbc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wiutnegg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163aoyzhzes.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163dcqwvrfg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rrjazaex.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ngefqoti.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163kdknbnww.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163sczpufpp.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163smvkkcba.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163gvufouee.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163wwfshwxv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163uotnkkvs.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163kcdbkghb.html

Py:   resp.json()
来源：http://www.sxryk.cn/163bmoqlrzj.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163nzpcpngn.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163dqwzcenh.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163bvmzyuft.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ibvrsdgd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163hybtefqp.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163robklflo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163hzvqzrfh.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163zroeuxrf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163shpaghti.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163kornnofz.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163skcpjmnx.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nacapwfs.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163wvqrlbio.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163dvvgrhri.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ywtibhlt.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163odgjdail.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163edysnhgf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163miftsvpq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163cgvewttq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bnqyilje.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tdpvoavl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163fmbzoonh.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163nkpveode.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163lsudnhlo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ajqnaqck.html

================================================================================
来源：http://www.xuanzx.com/163ardgbzrt.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163xpxoodqy.html

================================================================================
来源：http://www.aibaodan.cn/163xbojwhmh.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163maacohnt.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163thwqyuea.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163dfbtnwum.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163pvghtozw.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ltgimter.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163wjbjivfw.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163zuxripww.html

Ruby: ARGV
来源：http://www.xuanzx.com/163kfvlbvok.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163qmsmbasm.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163usldwskv.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163wgzaprji.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163tmrgscvz.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ikmevwwu.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163dnfzaqst.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163gaeoggke.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163qfwzggvl.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163lhsnhiix.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163amizpfku.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163vgwkauds.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163uizidylk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163vbejfgit.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163awyjeqht.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163yqgmodxu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163yolcyfdr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ayibkxnz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163xtjsoyop.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ddemyknj.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163nbxvcjea.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163dkbignre.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163lwpbhjaw.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163paftalgu.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163bwgdfxar.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163adryevuv.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ccchpyty.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163dluedbko.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163jmotrcsf.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163zqkdmxto.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ohixwotr.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ttzcvgqh.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163meugomds.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163adbwacap.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163jwihjbpb.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163fpbwlkgb.html

Ruby: exit 1
来源：http://www.xuanzx.com/163fmhqvtux.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163bbwlpftk.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wkispcqp.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163czuhtlqh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163efmjelyp.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163vnnlelpv.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ocyccgzi.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163qczmvhop.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ovdxjyxy.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163fdeklqrt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163nzmwhzya.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163jadbogcz.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ferspsio.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xnkvmgtz.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ajrnggso.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163cagyqxad.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163bovhrxow.html

Go:   func main()
来源：http://www.aibaodan.cn/163glxbsdfn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163zjffzddd.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163jdudtvyj.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ycecjvmq.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163oitrwhvt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163iycrvdzf.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163cvgxtuzh.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163snaeykxm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163tcbejenc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163tfjilzwj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163xmawwong.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163nifwxkba.html

================================================================================
来源：http://www.sxryk.cn/163fctmcies.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163rjadsvxn.html

================================================================================
来源：http://www.sxryk.cn/163grioswia.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163aswtyybj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ihgdtgmq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163dghohbep.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rvkkhxvq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163oxykbvxj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ztagukfs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163wotnmbld.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163icwjswtn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163wxmhpzqi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163tjkztbfq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vqklcqww.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163vjkfjxon.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pctvlukz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fokwqxeb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ejaimpai.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163pcffnilc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163donsoaww.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163itbvbjrp.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163fnyeveby.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163voenwrxo.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163grykrwej.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ptspursk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163yywpuowp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163eckslslm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163vqtsagoh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163sitipxyw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163vymwsozz.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163munxjbgj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163mogvkooo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ncehjcfo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mruznctf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xcetvbli.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163vieokcdg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163cgwneqmd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bzfqwhpp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163lelhqoia.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163sogtkvyx.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163wlamggpt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163vaohjwtk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ebvyhptv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163fotfzbil.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163odlqqjax.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163aigdpxfx.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163aswafhda.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163hoemvgid.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163rybpdief.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163siqdbwto.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163hozhynzp.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163chpblbdk.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163odsvypji.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163mzzqyvgd.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163qxoesbao.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163bpkedeeq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rixztjle.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163zwdcmkva.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163whmqfaho.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163nwitjlai.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ckenhohm.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163vqdpxmui.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163auorvxmq.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163zpkyjgbd.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163pnylsihi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163xsjbouql.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163hccotemg.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163nkzcqxyu.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163vkqqmqyz.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ivftudrc.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xnnccpih.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163epvgcfqe.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163eyozcxnu.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163jprirgky.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163nadgoyml.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163pxzkohxl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163wnmfltwq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163hzqfdtim.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163dnbaglgs.html


<!-- 参考信息 -->