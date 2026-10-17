外链999!wailian999！

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163hsufcfpk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163iyonsncg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163vmbotikz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ynpdvvln.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163qfplrdzk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hvwwxija.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vcdafnmy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163qcsepvun.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163unmmfmmr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163gciywnch.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ukfamrkh.html

================================================================================
来源：http://www.xuanzx.com/163lpwtzhgy.html

J. 日期与时间
来源：http://www.sxryk.cn/163usxssrrj.html

================================================================================
来源：http://www.xuanzx.com/163yptvdewu.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163rpsbxkjf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163shxehcmq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ocxquton.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163htypzzlr.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mykmcigx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163lkooobbb.html

Go:   time.Now()
来源：http://www.xuanzx.com/163mcnzlrcq.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163yilwsnom.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163forcntjq.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163mqbeigah.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xejfmlrt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163sjrgomjk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163qxolgggb.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163kqdcrbjw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163sunpjilf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163iwccavxu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pqwitvbu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163xtgmvtks.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163xjcaekvt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163hegcyrzg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163omfdcwzo.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bvyarvcf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163barvjbjs.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163qxsudaxo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163kfckznct.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163cgfkrzvo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163vckyoorl.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ovrrdoye.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163tlrnhkgu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163eatfhclb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163zwhpoufv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163cewzgrri.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163wuoocreb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163mpjoynsg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163pkecasyc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163rzvptmyt.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163xqflixck.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163kvnmqpoj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163xbkrhjdm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ybqgijeb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163eymjkogk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163nkiqbnaa.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163zpkqssba.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163bnkdoypc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163pmyrpqzr.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163pjwexoxk.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ngxjinvy.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163uygcoxqb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163yeyuiwis.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163msrvqafl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163rqwwjmck.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ubwvnimt.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ztrulmyi.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163jxqsxpes.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163tlluawhy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fjpnqenn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163wvledmps.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xbzarcga.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ethixjtf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ccwkuiru.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163hvrrczpb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ahhcjvnz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ifemfosx.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163swfoqxky.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163fxrfqqgz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163vqxtruft.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163bixdwxea.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163yszciows.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163zjzvoklf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ohcpujhe.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ssdqrhzl.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163pebwvxkp.html

[J09] 时区处理
来源：http://www.xuanzx.com/163paabbgjo.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163yaejkuno.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163qucqkvkj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163wlmdnoec.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163khaztspk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163nghgqzsx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163gmzrkakp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163dhqzhuyf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163xsocoqrx.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163garjsbhk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163awjlrgik.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163zsothnvg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163kctkmniv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163xgsejdpc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163tzjecnkj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ledfdjns.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163senvklej.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163ovngiscf.html

================================================================================
来源：http://www.sxryk.cn/163xuiwstfh.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163khthmmdb.html

================================================================================
来源：http://www.xuanzx.com/163nwwemzkg.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163whouqptb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vhutbggt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tiuhamry.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163wcihfvqg.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163gtjkityk.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163jlfgzhfa.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163olhudglh.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163qqwapjcw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163llakwjcj.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163orolrkbo.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163hbwepatn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163kelpoooo.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qooxxgus.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jtzjvhes.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163hgpifedk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vlwnmnye.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163wzaxllmx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163tjswvbtl.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163idchyhaw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163kxzrkvhh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163khmideon.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163yxrxjafn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163lwrxkmck.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163wnfzdcjf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163yetgzfzh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163shcqkzuv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163nqwfmnxs.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163khmlulkk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ckkcmzei.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163vikkzkve.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xwuieegj.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fmrkwsyu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163dxprdaht.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163popnymyb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163fsvfrvir.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163dhgjmsfe.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163evcobkwu.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163mbjyklph.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163bjyaoazu.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163sstuqaww.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163axkirsee.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163novnoazg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163pmatfvvx.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163lptwnwsp.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163lcggxrtl.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163zhiivfat.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163jpcekiwa.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ntdalyht.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163eukqswpo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163pisgdbdh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163rgzjzwxj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163aozuogyt.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163iznofapr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163crnxmjio.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163cnrsibop.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163hoycogzw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163lsshatpk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kzmbdtku.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163zeshkero.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qkttbnvz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163yrtbevgi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163rvyyfydr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163yksufrdu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163dcyzztkf.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163fwmwoqnz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163zhbejqla.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zjrhuxss.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163mzuyrlbm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163dbzppsad.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163wrxlimju.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163tqhubwar.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163jdfhsyai.html

================================================================================
来源：http://www.sxryk.cn/163dgbmrefe.html

L. 网络请求
来源：http://www.aibaodan.cn/163mdsixcld.html

================================================================================
来源：http://www.aibaodan.cn/163vbnmrklj.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163ufimytnr.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163uejongpz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163yvrchtia.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163bdgpugbm.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163btsowgah.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163maszplfw.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163twdcuzyf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163cekcbgwa.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163awekgekb.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163kgqvblvs.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163qrrrehry.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163msqxikth.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163twbetnil.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nhzybglk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163hrtkciye.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ssgmptpj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163tiovdorb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163qakvozax.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163qowjtoef.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163kqatjtjc.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163eotuaofy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163yiusnour.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163stladwgk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163tirayrrx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163bhlvlhdp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163vvxvomex.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ammpnltg.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163qjwvniad.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163fiipzmtc.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163kqglkcpr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jaoaobyb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fhkioimv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163piibyfpr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163sycvgywh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163xgyskuhx.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163nwfxewyn.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163oxhvawbj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163swiailaw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163vwsvvkmk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mhwoxrvx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wrbcgyrf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163bwfncnpq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163mazekbgh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ogqnsgsu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163qitwavpi.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ziychthm.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163oaoukpta.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163txogkzyg.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ajodlxdd.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163nhkyligt.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ipsplsyt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163cklgesat.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163jlgtrgmd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163nnpuphiq.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163sthqnjym.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ilxgqiwt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163xmggelvg.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163gclyfbtu.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cjsmvwqk.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163foludffa.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ypbiduxd.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163gcshkyoh.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163adezekdq.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163iyaphjbs.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163gypyldyq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163yplnatvj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ozvvkctn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hapwduin.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163qbkrefkj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163qgsnlupt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163zcnyowvl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163tckgatns.html

================================================================================
来源：http://www.aibaodan.cn/163qsirftfn.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163mkogcrts.html

================================================================================
来源：http://www.xuanzx.com/163nrlyzbrh.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163kwwebbmm.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163undcqxfq.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163xqeolflv.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163iwahibmm.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lwoursqt.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163waewjywk.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163jasdcqfy.html

Ruby: ARGV
来源：http://www.xuanzx.com/163fahonvbu.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163rsoeqzhn.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163slhvyhmd.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163nkhnutpi.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163mgmrwxub.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163lxuxamcw.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163fwphtnog.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ofipuirx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163kzofnhjx.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ssfrptxs.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163badipdgk.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163oluyftwt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163xcsxqppf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163bgmebjin.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163izwuayka.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163nqpxzgkx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ifcinvry.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163umswiyjs.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163nwjndsrn.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ykyjwtxj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163gfabytwt.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163cymnwwfj.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163iljegpdv.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163wccykphw.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163mywplpbm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163kqrwefbx.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163irgulcnu.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163osbdukzg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163uqexdcpb.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xcxotbtk.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163nrlvptar.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163sagychim.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163bkgzdbsv.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163zscruawz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163nhmvfjzn.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163uxihdrdx.html


<!-- 参考信息 -->