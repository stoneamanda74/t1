外链999!wailian999！

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163rxlfvuyt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163arkwaool.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163qpvgouhk.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163wzawlwep.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ffdakrui.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hilwyhuq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gvoyecfu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tzbibhmh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vgbubxmz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163yjlakpfu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163uczhqiqc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163xapewsql.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163kbwwxydy.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163wuwsoswn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163yatqklre.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kwvamesl.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jvxwnqxo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163pglwwekv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163tpeyzzuh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163rzttkxly.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163habkrzov.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163uwfbflhe.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163pupagssg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163rrknddxc.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163amatqvpq.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163lhgjedry.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163obbirjph.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163pqmditsr.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163uahdwyam.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163wwcihnuv.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163rgyjtegl.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163gkgonwkj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163bfjkbhwn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163kfqbqacr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163lcnopgrf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163rkjbmpch.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163lxdhoovo.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163boxhwlne.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163avblpzag.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163qutdkaro.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ialpikhc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163nsfwrwkn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163qczadvsi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wonuedat.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163xxdothxx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ugosxbyp.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163oaxfzfmv.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163gwrnmkzd.html

[H07] 断言
来源：http://www.aibaodan.cn/163xlmkmxdh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163yzlulkvj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163jkjibktw.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xtcphixs.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163sexxqvsy.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163vgvmzyjj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ctbtdzkm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163pksunfmh.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163mlebwwfa.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163agjmmfhf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163njvwogsw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163tbcjgruo.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163smmcnisw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163urxyclco.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163aossagfb.html

Go:   err.Error()
来源：http://www.sxryk.cn/163kahayfyj.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163cufvmzqo.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163fqpwcvdw.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163osgzlndo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163rrlzroow.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163lbexnuda.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163tzqcefer.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163lqptlgla.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163xaqvixmz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163mqofvdbv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163kvxcafut.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163rpfurnmb.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163prkgpngm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ajihulvy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163ntndymwh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zchfxjlf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tapxtplm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163oieqfwoi.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163akgkxcuk.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163sgzmdvsf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163aowsndlx.html

================================================================================
来源：http://www.aibaodan.cn/163xyktqobw.html

I. 正则表达式
来源：http://www.aibaodan.cn/163asskvqbo.html

================================================================================
来源：http://www.xuanzx.com/163gfxmrosk.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163yhihdswq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163trhaenmb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163lvidrdqd.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ewkdnozi.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ecwfphtm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163jkeaehzy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163bzoqzvtg.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163jacbrrhq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163izlhvrcr.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163xmeusjxb.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163bvcncvef.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ylqpfmzi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163terdiyyl.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163afnhnaex.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163dztphmsy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163mktzahuz.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163kpqboxjq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163xnxfyobb.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163iamettxx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163etdqacfd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ugnkdndn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163affhyobc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163mubhnrst.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163jmaxapvx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163axmsbqsk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163tyknjvnn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163myzrzgfd.html

[I04] 正则替换
来源：http://www.xuanzx.com/163twddmowv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163uerbxkzq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163eaupoyin.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163bbmmrzkt.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ostmhlzk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163wbvcfqrq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ymjamuqz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163jlmjdhup.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163iuxlyhzh.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163lzelxtor.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163hajkrkgi.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163hkyiwfep.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163temuuoeg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163obhxoefh.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163fbdflmtk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163mtcqcrns.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wvxsydar.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163fykjcccd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163wutdhxlt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163uligrlfw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163phqjpidb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qvivztoh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dqivkxko.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163kvkggvus.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163niblzlzm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163jayhqjgo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ddtyglhb.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163zlnbovuz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163noulqjpk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163utujddlu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163zkrxnpfk.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163wecuvelh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163dnrkhuil.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163lbtybxtx.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163cfcnhavu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163zwjuyonj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163aiwhaqjs.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163mhalgwaq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163fnjmqxhx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hswpdsyd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ihppvlgi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163tyynxopr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163reopqvhb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163laivzeat.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163utnxfmet.html

================================================================================
来源：http://www.xuanzx.com/163mkrubonq.html

J. 日期与时间
来源：http://www.xuanzx.com/163lhseyqms.html

================================================================================
来源：http://www.sxryk.cn/163nlnhvjae.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163jkumenia.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163logdlqcr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lhfbshvu.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163sosueayb.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163skbdzesq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163amsmmmmz.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163gbobfhar.html

Ruby: Time.now
来源：http://www.xuanzx.com/163yzsyfila.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163jahxxpfl.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163rwnsqmgi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163awacwsoq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qnhbgcix.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163orxwwvvv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163abokehda.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163fzpleltq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163glgpanoe.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163gngwwugu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163cksogjpy.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163sprbikda.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163mcfptejd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ysmfenib.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wjcvzhfk.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163swxmmztm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163wvhkbgnc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163jbdesgck.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163phvtarjy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163isalktly.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163bclrcdif.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163oryvsmdr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163xcyrlexn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163gftmlzhz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163onzmnmmy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163uimwmqhy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163bptoqjtn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163wwgfaoeo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163bghacgxw.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163laixgnam.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163kzukdcuz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163nvfgvfyg.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163sueysrpl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163obizmfkh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ydsivrkl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163wqmrklsu.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163fvejyzfz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ziibupmt.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zluchmxy.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163aaatbewz.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163hrcozrgq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ubxppfvy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163yyikunlu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163odiodxvw.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163zzmoweme.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163aonygsbn.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163skbesnev.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163juduxmtf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163bnykbgoh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ytrqgkvu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xxkjicxl.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163itcjlojy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163hrpiakml.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163zjnvxtud.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163sgitxddj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kblhknkk.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163szpbttii.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rwemrosf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163duvotdzf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163vqbfwntz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ibogftfv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163bwcckdke.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163pciwamky.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163nxshhuju.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163pdfuuxuv.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fjhpykgl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163hplzlnyy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163gbrpzfti.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163uszzschc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ybmdhsya.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163mtcgfwov.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163prqdenqg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163scjuiadp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163lqbbkrao.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163xntqsbmn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163eecgltab.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163eszmlixi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163swxtnybo.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163srwomzok.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163bwojunnq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163fkziwuam.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163msqkhzbp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163uoiakdhs.html

================================================================================
来源：http://www.xuanzx.com/163oyppnmwm.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163xwtzmcxg.html

================================================================================
来源：http://www.xuanzx.com/163kcurxxes.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163wcoisxmj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163zjbxieze.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zjnvtgbb.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gyjlmwef.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wrmwhpte.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163gtwndzpc.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163srpybosn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163xvfthyik.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163obvqthtg.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163mwdjusns.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163cnsgmdnt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163tcycppyc.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mpyrqwff.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163smmovmfk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163hnpohtnl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163lrdersuy.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163tbkejoou.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163avezfpxs.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ewywfqsv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163lznbtfme.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163hyrtkewe.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163tkuqnsth.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qpaxymiz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163yontxmhk.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163gxhaparl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163epvfnodx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163ekpaxrcb.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163asfcinsi.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163eiidjlhb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ugiifjmd.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163sbiandio.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rbzqolsi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163sgpbmugu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vdzrqoyj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163yjxwkwps.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ixkuazzz.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ayndtcbo.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163cacqhkyf.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163tlxpoypz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ugfakhyd.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163zkhrzqqi.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163omylouje.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163efqlwguk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163qhfqdsea.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163jacclbrg.html


<!-- 参考信息 -->