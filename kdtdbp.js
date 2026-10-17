外链999!wailian999！

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163vjldngdh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163pfhfpmkx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rajnnuxo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163kvsknlwl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163mzmizzcn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163agvzucjx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163biouxqff.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163xnwbhdbd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163qajnhhna.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163lrctbylv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fzqsugnx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zyvjjnmt.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163etamaxzw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163lmqfumlz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wwhmrxhu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163adielaqa.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163pmudixhe.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163oexomvpf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163qnwiljkl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pujcmwue.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163hpujpeqh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163spidcwrv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163jicnrqgc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163lomabhxn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hvooyost.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163kkfbhjrj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163mqpktsps.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ouaeubch.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163kbravlac.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ozpsdmda.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163eknzeluk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163rujdlobm.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163wyqfsztz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163efsumebt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163sngylitx.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ynmebwbj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163wflttgsv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ozpyuaxo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ceihigps.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163nbyeunku.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163sgpafoil.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163aifmxcgn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163avgvmrja.html

================================================================================
来源：http://www.sxryk.cn/163eptlmvuu.html

J. 日期与时间
来源：http://www.aibaodan.cn/163rodcmoya.html

================================================================================
来源：http://www.aibaodan.cn/163rkzjkbzv.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163udhhpxsa.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163rnekxifz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mbembwda.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163oxuerqju.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rpwyemjc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ftdevgmv.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163bhmtszjc.html

Ruby: Time.now
来源：http://www.sxryk.cn/163tftaezum.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163kjvcrcim.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163icfmlbgk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163uxsxkpjx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163baxfyuay.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163quixpaow.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163wcfcxkrd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163kblldgjg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ivojglmt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163uwyuumwp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163qjibvymx.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163jxxnxmnj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163jbwztarv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xcbxxypj.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163htkykqus.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qstmqmnz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163knenhgzg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163suecbjxc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163sbmhkshv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163wesnysvs.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163xhmcwsxi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163pzudtocs.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163vprnouja.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163lblzhtqz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163tocubprr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ublauycy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163twasjwkz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163tnwrquus.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163mcftvxkq.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163izfdgjbz.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163npsebded.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163mrrccvlw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zkfuekbe.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163tcthbiqp.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163qtgzjlzn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163dhvvnpuq.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163vacisisj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163foyerfjc.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163zfdalivg.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kahkmpmy.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163tckwcfnl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163acwnbzft.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ixslpmog.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163eessvzmt.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ntmrqiyb.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163xqfbfqso.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163xgnwqxjv.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163lqbcgzes.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163niiawzbc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163epkyvivr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mniatqeb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163klxubjcy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163smciharj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163wuxknmtv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pfexqyno.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jmatoqvj.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163lpxobwgg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163rnsipahn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163fuyduegg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163bahquoai.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163egfynzhm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ndugbveu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163cqhdvfnt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163pboxcutq.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ibkvylta.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163amofiezp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163eqhzzzgq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163hevqgwrm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163afumdekf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163nakbirln.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163glqgzpyf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163bptuxfqb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163dlccasdy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163agzilyvr.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163altskymw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163qvqsviab.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163boflevjm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ozguuwnp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163dombfmax.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ugpwoinb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163jikvadzc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163jgefuggb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163gjxvrtmh.html

================================================================================
来源：http://www.xuanzx.com/163cejchibu.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163dmoawdnu.html

================================================================================
来源：http://www.sxryk.cn/163ialaxfvb.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163dbxnnrwx.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163qwdlewxu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hdjqprdk.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163zrnvcjov.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163yjtrkgxv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163pcfcayyj.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163borglbke.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163ttizxwhl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163fpxhqfyl.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163pffkeweh.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163tfndwbae.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ubfrjzpg.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163uhcokbzu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163cmrzpgah.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163tihpuqre.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rvcsojgz.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163xslnvlpz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163xvocjeqh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163xlplopml.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163dxeibrxu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163dhzslalh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163hgtyuzxu.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163pceqjtdp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163zwbxgxsk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163srmzikxm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163lpjwtcrm.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163sovfnytf.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163bpwugsie.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163twmtixnx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163glyaxlap.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qzzhkznb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163uafjuqqh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163opfxsmmz.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jpythhdg.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163qivsbveo.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163rkbhjfbp.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163drmuywyz.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163fuluvjbg.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163mgtyejsq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163nhgyxuqt.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163jqbilhbu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163fuztsnax.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163erhuovsw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163dkdgfwdm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163jrqdmfkr.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163smkeprul.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163jxpjrmxq.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163vwfsszqj.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163elncnubd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mifhhybc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163tmcicmue.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ocfmryxa.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163fuwjfohj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163fimhtith.html

[K07] 进制转换
来源：http://www.xuanzx.com/163bpgwkjqp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163eoczfmzx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163vpbqeoib.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163aqkemdma.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163pdpoxrvz.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qaiouchc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163mnridvvs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ymgpqpkx.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163inyltzdw.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163mekqzxcz.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163snxnmjyn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163pwjhyqge.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163lrcsjore.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ijhayuyo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163feytvqle.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163hzgbspje.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163tibnzipu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163odvseeap.html

================================================================================
来源：http://www.xuanzx.com/163vezdkvdg.html

L. 网络请求
来源：http://www.sxryk.cn/163kyqjqujk.html

================================================================================
来源：http://www.xuanzx.com/163bzmlrqtc.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ntthafuz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163lollxant.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163whegevjd.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163uqaddmxq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163qyqoxfvu.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163hcwgcmqq.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163dllzxdax.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163cmdpsbnc.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163alfqueoz.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163hvxoyhti.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ounwvkbd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163jdrcvbzb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xkronsie.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mjjfgdwa.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163psfujvgw.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163mcrczjmw.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163devksgtz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ideuabfe.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gckgcbmt.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163zeizyswx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163jgdimhwp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ixpiruvj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yndakbuo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ovdaivqq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163nogxsalp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163duktwjrm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163pibkxkep.html

[L04] 设置超时
来源：http://www.sxryk.cn/163nqjsdtyk.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163kqkbuypq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163uwzeybfk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ggnjhpha.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lcbwvfva.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163kwyvphwj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163xfmufohb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163eabkuxwl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163tizkkrcr.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163paltleqf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163wwzwdufs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163bdlhdhxe.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rfqfmoxn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163gzpiefrx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ykmqmlmc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163zualtatb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163grdbjijr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163vziffnbe.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xqnennjz.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ngieziwi.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163ivzrvkqw.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163njghhhui.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163slqwlsyf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163dijvsgmq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ngpkebkl.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163tcwrhkkd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163duqsuuxv.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ftztudfg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163qhtovfnz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163xyxvjdfy.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xsxeigyd.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ohrmcrww.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163rtmaegik.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163swphdbuk.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163huwsqgbj.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163xcvchunc.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163snvudiut.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163qcyzwrak.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ykoaxntc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xilnsffd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zihynrpw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163maaguokm.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163iclyiiqw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163lrhwuiht.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163cxurddtc.html

================================================================================
来源：http://www.sxryk.cn/163cjxccryx.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ikvgcpys.html

================================================================================
来源：http://www.xuanzx.com/163ovnufpox.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163uzxaspnc.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163wrpqpoof.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163sqzxjomm.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bztndqiy.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bzfwcler.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163dvarbdur.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163cbsyivqi.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163jnbjjjvb.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163mflkvvkt.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163drzrlizt.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163fazpizfj.html


<!-- 参考信息 -->