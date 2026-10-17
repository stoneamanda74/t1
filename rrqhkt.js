外链999!wailian999！

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163utaxfgdt.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163jnaffevm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163iqnginjf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163xtaerebg.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163plsdrdkk.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163oyduwura.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163pujkozvt.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bhlffyng.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163nguljeys.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163gercnvde.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nlmkrcci.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163usiqxdta.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163yrnhrvbc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163whitybtj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ikftukwn.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hatwgmor.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dlpdzsee.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163krtitarl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163onjgoold.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163hfhxtflv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163mqxnaedn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163qhslocqw.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163kbakaotg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163cndfspwb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163tsgpajpv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163abkhpuzd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mrpkojcm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163vkhhxywn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rcvokmkp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163rnziipct.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163zdwocygh.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163vucniwba.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163fmktoddg.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163pwdbxkul.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ckxzzvcl.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163tjrhpshw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163btgmuewv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163pkufuhuy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163uxhpgrxn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163hdikvlzo.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163mzbqatnr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163pseniztu.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ejfzepeg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163dyhlczqg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qcbxhczp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163xvvcaddv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163yknaprqh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ccfflgnk.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163fxsqrbat.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ikyaiyni.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163tjyviexm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163xbmwbflv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lmmmcrpe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qwlpllrt.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163rinhhzrl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163pfrbcnro.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163vgugvojr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163abzbrghx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ilmbmztr.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163jewlvwzw.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163qdmmgtru.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163petypjkt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ivzccjdp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163ikvbhqjp.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163bvgocqtn.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163kjcehpej.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163vuqrlecc.html

================================================================================
来源：http://www.aibaodan.cn/163eqhupqhu.html

L. 网络请求
来源：http://www.sxryk.cn/163idraxsao.html

================================================================================
来源：http://www.aibaodan.cn/163clygcxbi.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163csjyglsy.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163mozxqhun.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163lammoemj.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163xucojzzs.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163cbgdbtcd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163kjcapkaw.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ygkrmeko.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163wfoahenm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163xvjgxxwv.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163wcjknsfe.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163qbogjvax.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163jozlqkoy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163eogagyql.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163rtzdxofd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163kgwdxvau.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163gzobqlbm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163mjxbkwvq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163woxnsqhr.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163anojqcfw.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163coyrsihi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jbiobgar.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bkygupcy.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163hjdptiwn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163pdjirdpl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ethwpzfq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163jrvlogqp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163nnawkbxb.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ltvdbbwo.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ycxkpnjg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163kjnyhrrd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nptpswcz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163tvlkffqu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163iceimwns.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gvenkpqh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163txvuxlie.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163dsfrizvl.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163cyyhetei.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163nzlubvmt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163yvmfzcip.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163dagcsykh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163eethakep.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163dukrmjfu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163xzdjbxdh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163sfmiphjq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163crjoswew.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163uhmvrwif.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163feqxemnl.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163zorkaled.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163libshunq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163tltwphny.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163cextvvgy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163yqiffqmg.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ypxsmukm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163nvadhaqt.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163cnfuectz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hmjhyfap.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163pyrpxadc.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mmdhhjpx.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163khzygaxl.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ojqekvce.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163wtfhhzca.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163lyvgkzaw.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163uirwbodi.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163kndvwlbv.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ndbuinhr.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163gwzmpneh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163leuwkyor.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163uiilcwqh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163juhfpydr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163wljldflk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163kaysorcj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163gyjzdjvg.html

================================================================================
来源：http://www.aibaodan.cn/163kcdzoifx.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163vrexjceu.html

================================================================================
来源：http://www.aibaodan.cn/163ssiqxeuc.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163lrkylnzy.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163pskynioo.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163mowbbfsm.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mqauingl.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163neoatnvf.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163olnlvbgm.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163wcnrhdfh.html

Ruby: ARGV
来源：http://www.xuanzx.com/163lwphozar.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163rumtmows.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163oqkhaegl.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163tplfxvec.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163jbhmddql.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163wlpuycar.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163jmoqeutm.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163rltughha.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163tkifjtff.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163rqezbgwz.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163icynyhwl.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163nsevredg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ueyeuznt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ezgxuymv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163vvctrzoe.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163owvzvqou.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ywvxlwwf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ogsigtgq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163fjtcqvwo.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163mnnqlagl.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163bepjxqch.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163gkbotwwu.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163engmjqpx.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163kgzngipd.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163vrjsiuwp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163biuhguol.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qmloopja.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163eoqrwrug.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163rdlnhrjb.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163byzkuizf.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163zvtlwsxs.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163xgrmisxi.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163kcivkzqd.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163fntuzilj.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163qylopcpb.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163edltmefx.html

Ruby: exit 1
来源：http://www.sxryk.cn/163jwmjehci.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163rupewpei.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163hfspqzez.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163smslvrli.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ebhgylfx.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163sizodlim.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163wytnnmrq.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163zujzhixv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163wyvumsql.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163xkgfhqgy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163fqommhru.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163pfzsdzkg.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163vijimsrv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163enssuech.html

JS:   require.main === module
来源：http://www.sxryk.cn/163wizgxosy.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163eaalabpf.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163dnvuirnb.html

Go:   func main()
来源：http://www.sxryk.cn/163aebwqtce.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163mxokpzcz.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163urgzjuwv.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163pskhnesj.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ybmkfccl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163sqrcheju.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ioiuoufz.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163kyjyvdhu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163yzqhxcpn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163uhnrlrdk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163cisviwxw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163owrsuywh.html

================================================================================
来源：http://www.aibaodan.cn/163mbaedqye.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ngzidrqp.html

================================================================================
来源：http://www.xuanzx.com/163locnnviv.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163fpnbbztm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163jmsuduad.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163tkotedrj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xrujqrbt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qlbdftzd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163jmgntiwz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163uddobmkw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163zqxdnyiq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163docbnwsf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163svxoofgc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163dmzwurys.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ebekrkve.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wmmpqbhy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jsxssmpe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163nhprfwmm.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163hwcvfkfs.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163oucpikfq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163mvonmkga.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163tqnwnsgr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163oqwruvgq.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163dtdpzrjr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xevogfjr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gnojhfgc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163uqikorsp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163lyocpwxe.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xqofoekf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163xjtzjkjl.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163hlcqzeft.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163rtfxwbfv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163plvhqjck.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xruupknm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jkqvnvhx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163xiuvjqvr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163nkgozkrb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lqhlztld.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163urjecbqf.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163gdbpwpez.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ehzyrviy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163nwvqdcxb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lghctyhk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ncvfaqhe.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163zhdfuhoc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ipjbokoq.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163lyvhmqha.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163beqhxavi.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163bgyxxval.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163cmzkuokj.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ngyjmurv.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163liqossle.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ccvhscex.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ovjayhge.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163pskzeajv.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163tdogvgaz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nnkgmzlv.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163owhaodbs.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163kjlvfrjc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163yyajmvze.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163rsctjbik.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163lmigbjot.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163farqwkge.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163pvmhddrp.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163nebitpjk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163nbigkdpl.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163isanvtcv.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163usvwgdrb.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163krbzkmab.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oaypitvi.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hptcywkp.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163uxybjxay.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bkrtugwh.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163wleynhxg.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163lvcxzvhz.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163vuhnqinx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163bsxnvvhf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163rjakhioc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163kgmrurfa.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163iyhfgosk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163dvedpmxk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163lgmiewne.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163flwkdwlm.html


<!-- 参考信息 -->