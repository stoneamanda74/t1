外链999!wailian999！

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gyymweoi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163tleqgcgc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ceqpeqmr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163lmfjobem.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163njyphbws.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163pxkiebrv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163nxngkihq.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163elqpgxzv.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rrwzmejc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163vqsxcwsl.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163hshnixhl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163aifbsyhp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ljglzahp.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163neyuames.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163decunatb.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163eoscieqn.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163dbiwwous.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cmhgjnwh.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163oclgzroa.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163irctnlhr.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163yjxfjlcr.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163vvtaobsi.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163kjpvnpqr.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163xebfthxw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163oueeqbzi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jgpzoqxg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163wgijreyc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163bcclupkl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163pkwqqdcw.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163jcwyitvd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163yqfihloh.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163rwiafrxu.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163aavegqgl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163yfrtsnoy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163npnonvtc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wyctqdhv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ozpflnby.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163vmkbfoqw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163cxnxqorn.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163yjwckzfs.html

[H07] 断言
来源：http://www.sxryk.cn/163vkxrlznw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163reliaffa.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163cbapoqfa.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wnuavnta.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hzdhbora.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ujhunxsl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163pemcdfma.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ameihwkg.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163mtwigjxk.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163vtilqmvw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163imtojagx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163feyatolj.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163zteiloom.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163zbvcsqbe.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163hmopikbj.html

Go:   err.Error()
来源：http://www.xuanzx.com/163yuygsrfa.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163apdkmqai.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163kllzzpfx.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163caryehrx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163mpqfcdhz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163obkkqxgg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163qbxgqzek.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ojeklsdv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163paqnisug.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163aajpqlnn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ykwcvmba.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163bguuszae.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163fwjgeawc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163oeebvzhu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163nhtdjbfw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163oxzasjuj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ixbivfaf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163rwvfqlcr.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163fxhxneyn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163kmpumihg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163jmmgwkgi.html

================================================================================
来源：http://www.aibaodan.cn/163fnyphjqw.html

I. 正则表达式
来源：http://www.aibaodan.cn/163sniistrq.html

================================================================================
来源：http://www.xuanzx.com/163qtkgpvmd.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163filkoyxa.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163bngkvnbb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163klqqcfcp.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fofikoky.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163trzvaiyr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163xglqzkur.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163hefgplos.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163hwqhtmsp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163usjgftjz.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163olmrmhbc.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163uwndhpqd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163oiojqlkf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163hrrfuwlu.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163knmrmvtq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163erhydbgf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163wcrbmwka.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163xzymmyim.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163siqssmxc.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163efegdapr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163vnotiiyl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163wuigdvje.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ebglxosc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163imkimxiu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163alixaobm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ctjswiwz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163bizaunab.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163mnjnjyjh.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163pvfycetf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ejegiojm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163cudrzwwx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xicruspl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163sazlfwnq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163bxogfifq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163juajaruy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163xfzfvkiu.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163pnicqhvz.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163zpmoblmu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163klhpdews.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163mmypcguu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163sidnzmxy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163osthejpg.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163wqcprjex.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163cwtpmwoi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vevlqjae.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163wnsuozeq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163gmgxdlhe.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163uargpirf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163dzfexgjl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163kamtqgnt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163btaxjyxa.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163snmoiwii.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163kigodesq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163wgxkwffe.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vcvhjzua.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163jbytbosh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163oqqklway.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163htaekbgn.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163yxuscoqz.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163pbzqlogq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163cjcjasgq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163gzvzboxi.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163hdkppdtt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163oeibwcra.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163cwkbcdfi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163hjbgixlm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163zyfynecp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163qxpllssl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qlwxhwkw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163hwsyscjz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163zulampud.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163imggukro.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163vxchyyqw.html

================================================================================
来源：http://www.sxryk.cn/163lnpgvnqn.html

J. 日期与时间
来源：http://www.xuanzx.com/163fnntvelt.html

================================================================================
来源：http://www.xuanzx.com/163mqggoikt.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zsvrizry.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163fjyjzzed.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ynxqscnx.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163obciiwge.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163koverhrt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163wzetvzbv.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ayrzkptw.html

Ruby: Time.now
来源：http://www.sxryk.cn/163kswumhrj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163uupmhtoc.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163htnfgmmv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jwhfutsp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163blmmzytn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ngfmfpkq.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163uhaswpyk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163czpopnhj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163bufxjhkd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163idxjeqhq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163onryeivg.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ukpuyblc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163kczfkeiy.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163raupxncm.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wrcvfmpr.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163oedlnerl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163olotfahj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163nacjsafb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vhzzdysu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163lrdhcwth.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ccwejdar.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163aqeilbhk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163icqmmkln.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163abnqrywo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163plohyrhw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163wyzcomos.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163vycfgizo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163frnywkui.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163lngebxhu.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163efdvwigt.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163rrjyyqjo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163juviyzqj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163grekozuu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163adcfybiy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163gmfgjsre.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163oycootav.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163bieeiwaz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163jujevsvq.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zdqynhrz.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163iiuoxjqp.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163faruunln.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163dxlrodmz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163xeulrubf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163myshvhfv.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163wkuttrju.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163knctvarn.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163oiwkxadk.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163chylpdxl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nripkgcq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163oenjfhls.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lnkrhjmr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163mtmsmtim.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163hemvumcv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163xhnxptws.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zrkewrwe.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uivylmgl.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163cwhwkubt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163klwmcpom.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163zmfmilgp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163hneqyqbu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163rkxuthit.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163mkobskrr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163kwqmkhnf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163pcysduvt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163vtxtkhev.html

[J09] 时区处理
来源：http://www.sxryk.cn/163angzeiyz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163qzvrlvsq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163cwfbokvx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zbysfiqo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163boxtvnxv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163nwzleuoi.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163cdbpzuye.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163cefppunt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vnkwexex.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163qdnldxqx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163catcudwb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163erqmzmiu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163escyldvo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163joogafft.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163pxwuvbks.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163vouljwau.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163aytsbzhd.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163dtbxxugq.html

================================================================================
来源：http://www.xuanzx.com/163flnrqlsy.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163vtrkitph.html

================================================================================
来源：http://www.aibaodan.cn/163esdpdrnp.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163hhvswlxi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163peaxfxdk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163pozgsyym.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163anrhywjr.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mqeqckwi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163tsgxtaxi.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163frexeccw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ranwgbzw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163tifxjmra.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163myrkrrwf.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163aqdlnzos.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163asjmhlin.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163snvdffuj.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163miwkqneu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163snkqtdrc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ibywoitq.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163bdpihnnx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163aoedcksh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163bycaotzu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163abogqves.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cxgsttfa.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zerengoh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163oudstvsc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163xojommzg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163cxfujgud.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163xppgrczz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163tmlyzdrz.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163odpnjqgt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163rnnxxwnp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163rtqjtukj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163jqkvswos.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kdoysmwx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163vwcvshtg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dvdakzjv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163bhxwtekp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163cjhryyza.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163mqzmjivu.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163fjwlnfas.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163jdnjxmax.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163piwkfffw.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163pplfucbq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163jouddynv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163lpcnfjvn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163xpcexhhy.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163oqskomtb.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ktmnafos.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163gwrhjlci.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163aunbxfbb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163pnmtaxdk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pvyropcd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163rwdmvrwl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163cmbjakno.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163ilfymzzv.html


<!-- 参考信息 -->