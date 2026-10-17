外链999!wailian999！

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163puwpyeqv.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163eiobxyon.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163zrsranxf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163betvwpkm.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163eqklqrjg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163gocdcgts.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163dvmeilgw.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163hodeadgp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163cazwrzro.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163byhoyaza.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163uwktzuno.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163yhgtgmcc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163hkwobbnp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163caoprzpr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163awyxcwva.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163vhosipva.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163vnvtitvg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163vbpcfifo.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163bmcbfsxk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163soubzcfe.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163plyipqrn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jnesanwc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163kzcrbejl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163usoxzolb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163qmxbiddc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163yslyclbh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163rqquywkc.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163mocdfngu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163sdlnzpad.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163sjggvlxk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163eqkxioof.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163whwvhpcu.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163pntsvmyc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163cnvwikos.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163driozscq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163aqqmrxrj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163fhaaugqa.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bfgscjaw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163atvsfjrc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163nvxxqzqs.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hsdhhpky.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163vamxrmzf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163qpldnjhr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163gyazxwhy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163oovvewww.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163dqttnart.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163pmnvyiph.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ewfwxfik.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163bmrolicy.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163otxftngi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163jebibmux.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163zhpzplai.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qbffbqwe.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ywksafhi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163yovvqpjr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163kvpfrrvt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163owyuunkb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163psnfusms.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163yizniysr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163kntqomke.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163gecrntsa.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163lkwhcdvs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163scrfqfmv.html

================================================================================
来源：http://www.sxryk.cn/163ovgpaewz.html

J. 日期与时间
来源：http://www.xuanzx.com/163izjxgpnb.html

================================================================================
来源：http://www.sxryk.cn/163kgvxfufz.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163nkdxhube.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163zskkfslg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163wsjgsrti.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163svmvnpgx.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163iyaujdjb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163kkwzzxxk.html

Go:   time.Now()
来源：http://www.xuanzx.com/163aogmpvqx.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163fezzauth.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ennlwnoz.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163wkpkwpiq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163inndnxbc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wmppgcfn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163qvxxrzlq.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163fierzujk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163xxsjtsse.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ekftvnzs.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163eehswyko.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gyptcabr.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163uzmjiukl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163titguvgy.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163hlbcmpvj.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qjszqlbc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163vegwzbfm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ownosdhk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163mcssqbqw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163cuurckse.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ycjhqfxv.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163rkblcjlr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163nuzutqhl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ykecoxmi.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163tmdsaugv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163tvnebjry.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163idhxqknt.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163kjnbwvnz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bdhurauy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163rphhbtpo.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163utvtvwys.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ozyfxvth.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163iuvsfmje.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163coxpijvm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163uwdnzgtt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163dfdczgfu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ugdxwxvu.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ucgxetrs.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163uzvrpspd.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163psjnxhgy.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163iptbkkbh.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163jmapulba.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ncbowtah.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163fubttqjd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163sntwpnky.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163lpmgkwqp.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163sevdcorl.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ggpfpbvy.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ntfwycbz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xfkydpwx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163mfsxuals.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kowwvlkv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163quqyqhns.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ogitbsin.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163vgvkhnuw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pbfpyphv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yfopthkd.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163qxgtkbyo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163rnexeemh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163auwukvjc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163lctlfifo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163tzwnlmaz.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ipddmbcw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163mgzhjcow.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163dmjlwfef.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163qqrzzbfi.html

[J09] 时区处理
来源：http://www.xuanzx.com/163yzsgoywl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163nsnrwfbd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163rzccpxqp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163efjnvmnn.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163yzwdycvp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163pzckjtvs.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163qtwtifii.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163dasnimrv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163jkhtopts.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163czwdkcdu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ykfffvso.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163keiovoxb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ardjgpqv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163remttwaf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163ebxvlvyh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xrediklm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ooakwffx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163malzdinz.html

================================================================================
来源：http://www.xuanzx.com/163jxhfsonu.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163iuxtmhwk.html

================================================================================
来源：http://www.sxryk.cn/163oawyzirb.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163gjorkmif.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163dtgqfajv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163owzqytal.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xcggfjzc.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163fsfthmqa.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163owofmfty.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163jcfuvhpb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163mztgvhcd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163blsoozow.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163pyauvrtq.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163lfnivnbw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163iafnmrom.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ygrkqrpw.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mgykvpdp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163isipzwek.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yzmwnsyb.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ohjrbzew.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163yuebdqih.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163gritomkp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hdqekhcy.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163leajqpmo.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zkdhmyhf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ztmwlmyw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163jqjebftm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163pewdiucb.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163rynhciua.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163mkaxlemu.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163uehggjck.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163lymlisju.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163pusgdxdo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163cfyzmacx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163mgygfgvx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163umjhzxni.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xxlinrmt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163liqxhiiu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163pznfnonk.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163irozpiln.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163xiusqjgc.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163cxuakquq.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163woviwylr.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163pevbuspw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163moydnrqu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163xhknwjwv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163wmhhusaf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nibzvzjc.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163qghzyfpo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163aelkhydk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163aaasjslz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qrtirypo.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ugoypyew.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163mogyseea.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163inqwzrez.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163sfdurrzu.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163dihndqgo.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163rnrderfm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vjqaowvv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163heszpvtj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vfgeatpq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163cxhnnhbl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ilqcxoku.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163denkdpqm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163mycqwwkz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163zkvqubli.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163yvfmuiqy.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163dcawmohh.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163qslxxxxh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dguajndf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163iuwxuvsh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163xilqvnaf.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163fnraxkmo.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163znlmmqwz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163bhtajovw.html

================================================================================
来源：http://www.sxryk.cn/163vclzejlc.html

L. 网络请求
来源：http://www.xuanzx.com/163cwjsrvom.html

================================================================================
来源：http://www.xuanzx.com/163sxqodfem.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163tcrmpjha.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163puktxlyh.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163rmjjkxeu.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163udctksue.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163lhgkjleo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163nbvbskjb.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163klnrxzed.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vaunlnbb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163eoetlxrm.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163vqsybduy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163pwxcofcs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163tfbeaivh.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163sbkmcpzz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gwzwtzmi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163coqadlrv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163lcuyyhtl.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163uwbvecew.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163iglihqxm.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163asjphewr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163swjxgvwg.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163ycracokq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xdrijuit.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ofokvvpi.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163hjvxcsxp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163yyzsqgmb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163pektvdox.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163oseckubj.html

[L04] 设置超时
来源：http://www.sxryk.cn/163zbrxwfjs.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163kclgivxf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163vcawmnix.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jyrommza.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163deoawaya.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163qojubvys.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163eqldztfs.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163rlqkbelt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163cmmawtun.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163txingqnb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163gpnykswk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163wuwmocml.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163fkimgzbg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163yygobjjo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163xkoqbpqf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ebxrbpwh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163egrucqnb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163idmexaju.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163kxmqewbz.html

Py:   resp.json()
来源：http://www.sxryk.cn/163vvndklvm.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163kvhykqlv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163sjveczuu.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163nsdpzmpa.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163cgvogbfq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163jrpnbxck.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163kpjrxjxi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163mkxokvmq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163xjxuyjxs.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163mzfdzzee.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163kjybwesy.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gctutede.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ojfwpmol.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163iktslhtx.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163mjmbejuu.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163nqotritv.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163cpsplrul.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ogsbstgg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163sfymsqcv.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163zztpyjml.html


<!-- 参考信息 -->