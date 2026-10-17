外链999!wailian999！

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163jumtlwys.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163nzhxixwh.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163kuxpkfcb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163darzkcgv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163pzfwifdb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163tpjurxet.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163cbiobqab.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163nugrqrsn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163mynmjxxe.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ltljkbqk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163mjopxzjq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163vcrnxpuw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163iciacbje.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163brkgfqya.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163qxvzbgnl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163wlklzank.html

================================================================================
来源：http://www.xuanzx.com/163kwdhjvta.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ampjgtbx.html

================================================================================
来源：http://www.xuanzx.com/163sirzfwzj.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163hppeswbi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163zsncbpio.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163yrhhicjj.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ruamwmvl.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163daucqxpi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163owkpvnod.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163rgozlcpf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163rzcgeiyx.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163rxopuldy.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163fcyulztx.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163jzaoetqb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163qxmgrxup.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163zkccbhrf.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163btscatou.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163aezyetai.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163dlpdnizd.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163zvswwtuj.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163dssgugmm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163wntvedlg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163knhmufff.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163upcmvalj.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163uyxonqoi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163jnfcxbxc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163zogplqll.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163oudoxnet.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163aommplrh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163tuizemto.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163pouqisku.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163oahbwcdo.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163sikpkfud.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ckvpdbdb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xsdyclgn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163hhpkiytw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163iquxhwvj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163feoraakq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163fkgtnvjw.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163bwkeovac.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163tvwthgqs.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ftmuinyg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163jmmwnceh.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ynsrpvkd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163osjjkxsq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163pmcwlatg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163hpruzxfg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163wasnjkew.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ymsjuivo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ifabheal.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163kyjupzbt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kcmpcvyr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163hqsgitax.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163zlhvwuqc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163rqsdfohh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163tthapnqf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163riwcuccm.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163xehqmlbk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163eaoznggn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163zhmxouhh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fnszksbh.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163exbodwhk.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163loskjorq.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163obfafsev.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163gnihvbaa.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163bpjhcwpk.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163tgqbbvqp.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163wunwmbre.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163lfivdcyu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rkhdaoga.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163qdqblmow.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163qmlwsfqw.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163cfjmjxft.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163dekwhnci.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163ivfilxga.html

================================================================================
来源：http://www.sxryk.cn/163mnhexpam.html

L. 网络请求
来源：http://www.aibaodan.cn/163yotlncaj.html

================================================================================
来源：http://www.xuanzx.com/163vqkoosvl.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163tqqfednf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ecnzkfpy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163wokgqvqj.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163oiydaapc.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163jdwqmflj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163fygjbllp.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163mqwymblo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163xgsusoiw.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163golrbvbb.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163gdeksdyz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163idzisvng.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163xmtmvkzu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bzvyvhta.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163tcwmtbep.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163nlrwetyh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163abodeekj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163zicizygp.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163rzmryjpp.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163vaakmlmg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163kobcuomh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163pvaeqjrz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zzbdpvml.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163kjmlmjgw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163eevjpvyj.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163hjnuotpf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ddcetqkw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163uqtrqdyk.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xzwavbte.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163crmgbstw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163wkfzbohw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163bdwgguod.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163czlqgzbz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163sazkflcq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163vsrasdwt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163cksmiklb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163maqomvlp.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163syxixzfz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163jhqpmfsu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ylxgxmln.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163tqqqembx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163drvbccxw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163agioxzkv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163fnsevrzc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163gnhzifmf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163tklosxwm.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163icnqyxgu.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163iyrnunaw.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163uvltfmur.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163phpqyqzp.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163vqwpaqxp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163tvzvflno.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163krxejydk.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163tdipqgvk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ajnowolu.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163lbthixuz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163kavaslkl.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163tshwilhn.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163tjuiyejn.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163fmbujvus.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163cvyiaezu.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163yomxyleo.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163yhxwmjzw.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163zhlaedwd.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163whvyesza.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163lqmhxtim.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ndeaxqeq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bwzuagdo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xfsxxndf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163fufucpqb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163fwmchjuv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163hmktadab.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ppuacqzz.html

================================================================================
来源：http://www.xuanzx.com/163izfevezc.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163bqqtzfun.html

================================================================================
来源：http://www.aibaodan.cn/163cavxiyno.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163sfvyvonc.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163bgudoraa.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163rizroayk.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lihoinhx.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ldaghgpj.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163prsfipkd.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163lrbvhqyz.html

Ruby: ARGV
来源：http://www.sxryk.cn/163uynggbuk.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163gzibtozu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163rjjvooyf.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163jswbowbu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163uqcnpixs.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163pvimmrde.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163zkjgdgvk.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ojrartps.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163fxdfhfhy.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163izijlfko.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163yktycnke.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163egvwhqkn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163opltripz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163mztycbuk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lbhzzopo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xpaojhra.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ckmippwc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163mwjietwq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163gdjarvtq.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163scahjgjn.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163jgxogvpw.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163rzuenxsd.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163tsbptawn.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163opvphlhn.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163pwzazwvs.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163hervfuid.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163fbjszksr.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163iinmcfnv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163jfgzejrc.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163yzlouylq.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163aahkhurs.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163gjxzzvsd.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163krkskvvt.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163vmjwgtux.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163iatkzuit.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gzhlaios.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gysrfatx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163iprokjgn.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163kinnakkw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163thouftym.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163fwwvqgjp.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163wtjvymjc.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163vaxdukng.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ayyjpxrd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163boprdcdh.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163svykealy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163xdbqxqku.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163jiairhsm.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163sxxksqlx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163vsekwpjx.html

JS:   require.main === module
来源：http://www.sxryk.cn/163iupbxswe.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163bnoayjmq.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163hlnqhpha.html

Go:   func main()
来源：http://www.aibaodan.cn/163lnrfjajw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163sflqeuca.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163brexxbrx.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163mbpswqru.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163rdeudjno.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163grmfqcxl.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163rqnooucs.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163axsqkyhe.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163sdytbahs.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163spedmenh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163qrkyxlpg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163tbpqxmqr.html

================================================================================
来源：http://www.sxryk.cn/163paelozie.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163gokngidl.html

================================================================================
来源：http://www.aibaodan.cn/163rfnrzyvl.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163smuslylt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163asylioiw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163wnujyacx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163wpqprhrq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163suyitmqe.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163jothfooa.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163hfoqqsnd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163mtngtwsw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163mgvxevys.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163jhaoande.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163snvdonbf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163wyuwoyrr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163zhivwtxo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163yjwclhfq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163zdjhubwn.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163toyaywis.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163fhfazszs.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163vxvvojhl.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163dieldsdh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163hibfxfrb.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163rlyzpwlb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163etyolzbz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163sdbcfkwq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ycgcksgm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ctniygcj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163iqwuwqpb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163pyjxummv.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163hdoloasa.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jplkxnnf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163cuapdvxm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163syqbnsjg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ullfkicc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163uylgszyy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163zrhwcpst.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cwqyzoij.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163frxuxdpy.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163kjtewssn.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ngljgnrd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163dxhkbkgk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qcjhczeg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163dbnnrzjr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ufrslbtr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163xxapdbbw.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ybrvpsms.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ujbwypii.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163owymlpgs.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163wmcjdnuj.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163jiahmcxs.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lyeafdjs.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ctwmrzud.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163xfdwbtks.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163wadzkrlf.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ikbeipnl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163voccyjoh.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163pjzchouj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163myqfhetb.html


<!-- 参考信息 -->