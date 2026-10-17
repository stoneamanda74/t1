外链999!wailian999！

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163pwieuvdn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163qggqwpxs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163caduijqi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163wylwpoai.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163coytgfol.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dbxuzrmh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163pivehlbz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vpqcrmro.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163paqmgxyb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163afhblcup.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163hqwqfowk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163piykditz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wfkaxasu.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163hmatodot.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163bazyqfto.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163yzfkvxhs.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163qjuiecgu.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163tuqksrnn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163vgnxekow.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163fqfayaiz.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163erwqlrbk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163iysqzcme.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163wtyvvrhu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163dvbujeoz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163qvwcethb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163uldocdwm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163euzybkzi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163etywhjsm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163vwldaatn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163rnxwqvcq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163fqfexghl.html

================================================================================
来源：http://www.aibaodan.cn/163vqbkxogh.html

J. 日期与时间
来源：http://www.aibaodan.cn/163zcypedfr.html

================================================================================
来源：http://www.sxryk.cn/163pbtppkdy.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163kljxjihn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163lznnyslc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163kqrzspqj.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vvkcllmr.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dkxcmvyh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ozptthvb.html

Go:   time.Now()
来源：http://www.sxryk.cn/163zhuqrwqe.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163byzctkfl.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163vegkwyck.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163dvqtxzex.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jaslgzsc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jmbfelwy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163jfslaecd.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163tgtmsfze.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163euldoafe.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163cfiuqcti.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163qitwjjuy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163nlmttoyl.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163gmbbuudm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163hiiiliri.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163nowjnbdb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163cdopklmp.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hygjhmzu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fbznbpfe.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163buvzzibo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163koezfjin.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163lcrysebu.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163dxjmfxsc.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163xfxvbnlq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ftjcogpr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163owdqmecl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163latehtjm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163szyaypdn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163xygoxvoh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ntfafnyh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163togugnga.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163gxknwafr.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163mkmhkthd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163eioneoai.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163yullmmmm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163mqrooego.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163kvpptgkv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163igtnccil.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163wyhgbcck.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163euugeomu.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163bfhfvdlu.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163fmseeurp.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163liteszsm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163xmzfqmbl.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163inqzhpsk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gcvbqhlm.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163rmqdevrs.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163dvlytvsl.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163jyfdkekk.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vhsvkxah.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pehddrma.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163wbnsaxrj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163polfmwif.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163bahppjfx.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163tqyqmrpe.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163agkweige.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ljyfstvj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163huacymfi.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163grskcqjo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163glnchtjq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163vbsolufz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163kbfsnjob.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163tsjyvsmq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163jjxjcdli.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163szniokuk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163tqqzlqwr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163dcgipzms.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163hkvuilch.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163kdpxzzah.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163hkvkthky.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ltzptddi.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hipffkaj.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163gckfoxnq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163qfdhoqbf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163maeuiizc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163bkgbdbsk.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163cpthivgc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163anesebrf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ddktuapd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163daauqpte.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qkuvywmc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ccmvsyub.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163yzrelxpe.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163klgmxnuv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163nhfsoxzv.html

================================================================================
来源：http://www.aibaodan.cn/163vpliqxzn.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163molqhujc.html

================================================================================
来源：http://www.aibaodan.cn/163oxzocigu.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163epbbacva.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qwbzxbpo.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163isnkiwak.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dawrabzx.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163syzbtjmc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163oiocjone.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163rzeyzdtf.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163zpgjtmpl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163vugswfgt.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163gwxjhbvi.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163wwpnjrwr.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163vrzzouns.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gdqduocu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kykvxuuu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163bxtscylo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163guybklrs.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163aqewlfes.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163fnlaitno.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163madwymzu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163itupjmux.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zktqzcuw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163emghklud.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wtbfeerp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163airlitlk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163wklwxemx.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163dviebauj.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163myzzapxb.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163mlruzzkk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163tqlijseg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zybemaka.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mvbfrmfp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ebjrokuv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163inrpeiaf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ifeupyyn.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163palvpius.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163fligwcvd.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163zinivbwz.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163znfxclip.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163pwcowlpw.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hgkqoomk.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163tklwxupd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163riayvtae.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163jhujobyw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163qhsogfoi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163davuknga.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163aijimcpm.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163kdyqpdjq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163vdnvfaax.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163jldxczui.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fepqpuyx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163odrpqeea.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163llfdxnyh.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163eowshahz.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163sjjjubho.html

[K07] 进制转换
来源：http://www.sxryk.cn/163mixfcsuo.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163qprygyzd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163fgrckqtb.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zjmjvvna.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hvmvdvfn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163eandnaxc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163irrscxxc.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ivfrgfvl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163twfbgpex.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163lkkfhlns.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163ptfcqvkk.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163vkevlshi.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163xgtjbcnl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163pceqhzua.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163qdwfrbfv.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163zgpyapki.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163slmqiefg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163kxogrbgz.html

================================================================================
来源：http://www.xuanzx.com/163zgjjdpuy.html

L. 网络请求
来源：http://www.sxryk.cn/163gkgywydp.html

================================================================================
来源：http://www.xuanzx.com/163nlmgydxf.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163lgfshzkv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163calfowev.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163xzbdvpon.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163qcvvyndl.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163wzreovfx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163vkuvqbtv.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163vhavhsyy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163mydvxgli.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163bgpuzobw.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163fiawolsd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163qxignine.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163bglliuif.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ultkxjvo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163gbyizmdg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163kdiremiq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163vkrnifqo.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163dcznkvwn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163kmhgrrhk.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163pkmvmocf.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163fwpekakd.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163maludwzt.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163uiajpdmw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jxpdxijq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ktaxemas.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163mqudcdoi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163hhvgkmbw.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163obyvgwav.html

[L04] 设置超时
来源：http://www.sxryk.cn/163aflmwbql.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163fzejzfzi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163brimoixu.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xiqvdine.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163oqubwxom.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163wzaixxtr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163zbseerrn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163lbifqthn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163dcstaonr.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163qmlbkrqj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163mvgyzlud.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xrhorutp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163pkjulzmb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163vlfmhdzt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163fhoqzses.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163lcppqkdx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163sglhhpig.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163waiofhjq.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163yphhsktr.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163cwihgpkv.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163xxwkqanu.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163sfnfgvtr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163xgtonfnf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163yutzaemn.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163lzutkclc.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163sdpfquom.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163gkylyfgp.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163dohbnuhy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163vegvgjhf.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163lshmxjby.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163iawqtewx.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163cqxvgqhz.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163cddimfwy.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163xnhkhxeg.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ijlrvbhy.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163hhmpapgb.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163rwggrvnq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ejtmpbzd.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163gbobumpe.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hteoirkg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pvxpigqe.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163udvaekqf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163bhbiwdkv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163aiqxjzav.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163tsnajhdc.html

================================================================================
来源：http://www.aibaodan.cn/163ohupprpz.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163tlboiybz.html

================================================================================
来源：http://www.xuanzx.com/163nvycatra.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163vfgfnheg.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163rizzbacf.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163hhvdrpaj.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163knyladhb.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nzrpbtol.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163acwgxuik.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163yacpwloi.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ktocfknx.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163cjdiekkt.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163szcbxpfh.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163owvvxmne.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163csyztxjj.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163xsnypoty.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163tuqvnspg.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163mouicprk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163gbghnnlt.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zaztubti.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163fqkbtzoo.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163jroevbzb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163vwhhwjkk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163yrbxtoyt.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gxmbooro.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cmvtzngt.html


<!-- 参考信息 -->