外链999!wailian999！

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163pfeireal.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163giirpglf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163lfvwtvhr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163qngtyfgd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163olercwwm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163jxutzcil.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ccodumaf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163tuqayozz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ogsdlsst.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163bfkyfqbj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163huacljmv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fihylpop.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163unhdwlbe.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163tkwpmwal.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gtiwyiuy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163mijhalyf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163mrksidmy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vnzwczuf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163maxhlthf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163bpzljkhv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163uyarfqkk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163gwlcnslt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163hdhmwhiv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163wldacsct.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mmljkryt.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163gxuwvnmq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ptewmgbj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ckficncw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163yqirtwbc.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163vjfjvvdz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163kmiunwyz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163eogzbyci.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163djgecsib.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163koqfwfdk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163uxvaqwhg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163qfzvrsot.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163biwecmss.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ackfstxg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163viovnwub.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163hyvrdhps.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163snvgojla.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163etkpmadg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163lablzifv.html

================================================================================
来源：http://www.xuanzx.com/163gskhobvf.html

J. 日期与时间
来源：http://www.xuanzx.com/163ozkarvmo.html

================================================================================
来源：http://www.aibaodan.cn/163drwxpekc.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163mvawmdga.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163inmykzhl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163judhhynv.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163aavozovh.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163expptkkm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163jghjmccw.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163lifhhpsd.html

Ruby: Time.now
来源：http://www.sxryk.cn/163awkmbesu.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163mpsaprbu.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163gaedsxmi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163kgutfydx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fgmyklov.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163gfpleexz.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163yapkgani.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163qxlxvjaz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163cesyccau.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163guouvqnm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163byesnbyw.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163wofqredc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163xaiqhddi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ugoxpdlj.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vizgwwzz.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qyzvfdjs.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163eyqojekb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163pbwfxoie.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rgywwagr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163kgyqrpno.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ufdzidvr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163xuxcpszl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163nwqflkyz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163cvnhdjkn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163zhqzmvkv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163rxsuuaqk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163zegxbymb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163fwdzttwg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163zwdfmsyt.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ycekudcs.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163kwipzzne.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163mamlqcxq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jyiokmls.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163htlvxzmt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163wpuneigt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163smazdszc.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163xlcbnpvf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163dgmeeitb.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163skkraolk.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163oymyygrd.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vzhyadfp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163kybkklgq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163anrprvmk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163elcehumh.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163mashirch.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163yhxhuznd.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163lnhuvjbs.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163dkrlcwdr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bvfsemfg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163hxaqhwny.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163szxvsagt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163usyatmtb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163yiazkvkz.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ecmknmlj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ivyfycdu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dcywobfw.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163dxpjrgps.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163pekvxgbo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163gmqkiwhg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163fzlteosi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163lvmidlvg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163wwgkjwby.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163xesfbmec.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163bfeupqex.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163wlyannav.html

[J09] 时区处理
来源：http://www.sxryk.cn/163aawontrf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163azlonpri.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163lomdotln.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qxrhwaru.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163wurgwlnc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163eoardqme.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163rnrfsiim.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163hzwgfhvu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163yzbefsce.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163bwusfdsn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163lwihcqch.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163yiuwavtq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163fqvzhoig.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ngbsdtyc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163tjnnrcts.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163yyxgpqrx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ytbwplxk.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163uojsfqai.html

================================================================================
来源：http://www.sxryk.cn/163ixuityeg.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ciuvuesb.html

================================================================================
来源：http://www.xuanzx.com/163mmtqjioz.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ajuxwpzm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163eaacqfjj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163nxjsqsqj.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163nfvzntbw.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ukvmjxhp.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163hixzkywa.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163uflvrcha.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ovqvjzal.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163lbsswoox.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ymepedtw.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163umhwerrh.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163zihxmere.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163xkwzhdam.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163cjjdwutx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163nlszoflf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163mxxlewra.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163qoijxzbs.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163pswgqxte.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163qyhldwnt.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163scjqbcwg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wxuckivg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zzthxpod.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163mmvldiov.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163gwszcvnu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ancyjfhi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163hscfujea.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163srydzogk.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163vixdmcvs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163vyjgpoon.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163nawrujue.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nwnhvmnh.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163vnykwbfx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163liofxqel.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163nnzqgkdj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163uilsmlww.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163wbvefqso.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163bcbmhwxe.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163rdoklwwa.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163auifweqk.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ivnzcxcv.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163svgxzooq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xzkxskmq.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163pebdbsao.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163aczopmto.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163dlldeyub.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163saqjryul.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163awyplwiw.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163poccczmm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vyuujxsm.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xazihdnr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163vkqrkuln.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163fffkiyxn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163uyygjckv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163omascjqf.html

[K07] 进制转换
来源：http://www.sxryk.cn/163vpmbwtui.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163xvkcosoq.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163qmmbkbvs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163slyudtjb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hwsvdxuc.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163fgfwxygk.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163uvjmlgvn.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163jppxbvme.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163reopxcpq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163svgsprcl.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163dlhqcdqc.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163didwisxk.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163csueoith.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163nfhtpkrr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163mgnisyyh.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163dhyamtuu.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163bpfeyjls.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163womdhpvr.html

================================================================================
来源：http://www.xuanzx.com/163qwympkhs.html

L. 网络请求
来源：http://www.xuanzx.com/163beoqwqoq.html

================================================================================
来源：http://www.sxryk.cn/163ywpvbbwv.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ohjzmcke.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163adlmwjrt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163gleqzalz.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163scecmgsz.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163urddsfzn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163qtqrvymu.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163cmnincbl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163iiwvvari.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163lhzfsapm.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163ixqxsjvc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163jxdvkaub.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163uraclyxa.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mdjmdojv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dalymvrw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163cfzjarsq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163lhkdwzsj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cfprfqdv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163cmwtqzka.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163rzkqbdia.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163fwpioupm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163skajjsub.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163wgnyzluv.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pwvysdbn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163nvmunngq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163whzpkkkc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163hngohukt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163cntrfuux.html

[L04] 设置超时
来源：http://www.xuanzx.com/163lisjrjqw.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163sjiimvrk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163vxpjyrxl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ytorsalp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ygppzudp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163piocllbr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163cvsfgupg.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163pqodxnhf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163tjcetxop.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163crjslgqd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163rmmuzdjv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163rtsuxtvd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163acyegyhv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ydukfnkq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163njssigky.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wwdxxdmt.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163zkgkqrss.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163hyhvqxsm.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163gamabywh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163lmsnkzyo.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163awsincmv.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163xygeojia.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163hdifdryy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163hsplanks.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163rninfukp.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163fypxpiuj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163nhnmhtrw.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163jtjifudq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163scukkdza.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163roddssvf.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vqdptxay.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cgyddobl.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163mkrkhkdy.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163jeicopwz.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163kuuxmzkv.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163snlimxcg.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163zyteziyw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163aunxfxiz.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163wgzbgtmf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163njhjunqq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bgrmxlaj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163lqbinjuz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163xmrzzyar.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163jmnpmtnr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163lnherefn.html

================================================================================
来源：http://www.xuanzx.com/163ajdkactl.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163mprcfroc.html

================================================================================
来源：http://www.aibaodan.cn/163ftytqbkn.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ixqoltue.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ahalkpur.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163vxfojvvu.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qouxdmjr.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163yiljoskm.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163fkfywqbx.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163pgsmffyr.html

Ruby: ARGV
来源：http://www.sxryk.cn/163ihjpqzvb.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163qcwkteyi.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163agzdznsl.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163emjssvbe.html


<!-- 参考信息 -->