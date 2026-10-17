外链999!wailian999！

H. 异常与错误处理
来源：http://www.sxryk.cn/163tsaahfxh.html

================================================================================
来源：http://www.xuanzx.com/163hbrzlceu.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ptfanziw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163mevoujsw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ujeyilwk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163smmkcrtz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163uoufsxpo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163beicpzou.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163uynxmjnk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163bdccbniw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ekkjumsj.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163bohzykcn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163rmsycqnh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zvyyppkl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ejgosbww.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xjnwilij.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jvvsjkao.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163axengggs.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163hiwndukh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163rogscxtl.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163djygkyhy.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163dkvpzvhl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163weytbhuy.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ywvioyko.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qthgktfr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163dsigzvgq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163wdaqdwox.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163flhpcupj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163coepjwmf.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163omifgnxa.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163fabngjjm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163pjdwrcay.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163pjtflgpt.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wtjozmtg.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xepagzxt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163zqzipbel.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163jkwnexyc.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163otnsntlj.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163fvbrvres.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163dkzwzehh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163yspjqvyp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vzyyqsru.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163asggjojd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163cabljtcb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163jdelsgdr.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163fxeztgia.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163mcdivuev.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ktpcxdvs.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163iuvpmbsu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163bckuethp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hxucxwxu.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mnfakwbc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ksxnmyem.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163iqweovva.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163vtjvdpqw.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163desidlhw.html

[H07] 断言
来源：http://www.sxryk.cn/163ocjznqcu.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163edxhrizk.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163blmqkbac.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163fjkyvemq.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hwfqyqtx.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163qtckcejh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163tptnnhbs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163qbukbyru.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163taymctvo.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163vskdbxft.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163jnxenbpo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163fqzdxqxf.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163njvherll.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163tdeicsgy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163vuxytanj.html

Go:   err.Error()
来源：http://www.xuanzx.com/163qcdoalbx.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163iyvorjqu.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163cgykjqya.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163gtqcieqt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163slmugbqz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163hzbxtxqy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163njdzjwqn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163imljqbrf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163wpbbqdak.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163hsblvnvz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163xdnsfgpl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163cfltgpzm.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163hlnrzemw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163wnvqzyhu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163pliwewzk.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gfeipsac.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163okvkuauy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163domijtqg.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163mzwesvwv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163fmtklxej.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163wabdciqh.html

================================================================================
来源：http://www.sxryk.cn/163pwubpkok.html

I. 正则表达式
来源：http://www.sxryk.cn/163oxldboff.html

================================================================================
来源：http://www.xuanzx.com/163coloozij.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163uxxemyqm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163rsssppof.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163fuopschl.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163aoezfmxn.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nsgldvjq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163txzrbbpu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163oawscnaz.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163vdjeslha.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163kewsmbws.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163qinmzucm.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163kuovwkwt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163uywwwloc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ludabfjp.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ztmkainb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163qgapilzz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163geizffui.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163rhoqywud.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163eggictfv.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163oghyuvyl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163hgbazxdq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163rcwqfkbn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163bwxvpjjf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163xrlezosm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163mopfbnmc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ifaoycgx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163niixagzw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163pvmbiiwq.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ryaqycro.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ugkcmnox.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bfmhdgal.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163fgfuyquq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wyoxpkcl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163xbpubvjk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163nknkzpgz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163havdiklf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163yktoreuj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163seseodpx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163iqglcgjx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qosryrro.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xsrjfhdi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xctqyszn.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ondmnotq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163cgtfpmkp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mxffenwo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163kexoygvw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163yxareojo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fkcikpdt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163osfowecs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gnqtiyhb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rqszfkke.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ccrldtqg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163mmmiqegt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163twbafrdn.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163pybnmtdz.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163jmzsiehe.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163imtahpui.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ftqcsinp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163uyyntoax.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163xilxryce.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ziczyojx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163pnkpfdvp.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163chsnflpg.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ugmlgyhj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163jlpmaqaj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163sftmuion.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163yietyclb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ivqoqfna.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pfgorxkj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163cckavzjs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ibtalsgs.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163eccakgsl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163lvqwixbx.html

================================================================================
来源：http://www.xuanzx.com/163rfdsbrme.html

J. 日期与时间
来源：http://www.aibaodan.cn/163hqyhptdz.html

================================================================================
来源：http://www.sxryk.cn/163unphmsuy.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163afmecodo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ymkiwcxk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163amlriqkd.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xzkrrfqz.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163sprmxmwn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ngvydnpm.html

Go:   time.Now()
来源：http://www.xuanzx.com/163iysmtjiz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163zimimmrr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163sonnayxv.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163kouajfnh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163grllcabj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163aiajutkk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163fxqkciaw.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163oukybwur.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163xasoapkm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163uqxfdvbc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rissipku.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163zjvystcg.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163dyoxlngv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163yjlrhzbz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163nqimlbcd.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nadydlmj.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163xthbdcte.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163tdvkbnzj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163voxyzyve.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163sfytrifr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163psvkcgug.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163snnvvlng.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163emeflrlo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163ncnzirzj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163tkhhuief.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163eiaqidcg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163mnuhtwwf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163qnmwoeca.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163opbridki.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163yagxxrib.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ikhgqxkr.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163btckixql.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163jmhkstgd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tvupggki.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wetrhogq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163rprsckqz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163jgtlasrh.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163mnsysquo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163vtkkkgdu.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163biadzaji.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163oykkjepn.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163cejybesa.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163goljacvr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163hkukgrxy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163xykxvanz.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ggjwfxdl.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ypscyaau.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163rhyzfthl.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163phiatbun.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163duhqqwtq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163mhhoubbh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163amqxcxut.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ulgddisd.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163hggkfozl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ryqssobj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mjvlbtrp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qhcuzfnb.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163xhfxsaiu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163xpmfecag.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163xuitgkky.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163rbefgwwd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163rumzholo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163jfcjpwsk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163yrvvszbv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163nsagijjg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163brjiqgvc.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163hbjcqntm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163zuhoiwhe.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163npvrxpzx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163meqnbowx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xzocsoxb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163bgcchekf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163dnjqsjbh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163nefisohw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163afqfytva.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163bspcynwh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163fqbgukac.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163gktprtmx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163shcwziwd.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163jyrndqrh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163usfpyoyi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163bkuaaoku.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163mbcjitxo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163gkopqxvp.html

================================================================================
来源：http://www.aibaodan.cn/163kwjsimis.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163vnkcccpf.html

================================================================================
来源：http://www.aibaodan.cn/163ostgcans.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163eqblpbub.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jbeqsayk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163hxhhtiod.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163nzwgoxtm.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163vrqozlcv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163fkxricgh.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163nqvitwkb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163sgvfkint.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163hlcysqzx.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163wtemhanm.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ruymsceg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163mwgwlbug.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163shqgpook.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ncnlslyt.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163qenzmxlc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wxyunwal.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163knrxlvrh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163rnwodsem.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163qnggjszh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163owmnjros.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163oismgmab.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163qryinnqy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ypegxlok.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ightdqlf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163fdmsplrd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163wkqyqrwk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163dvhpinjc.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163oisxpfcc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163iwbxbxrg.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163tzwvzzuw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163tnnrbmqr.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163uebvdumi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163vecutkea.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163dedksiqp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163bflbqdua.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163jewfxutu.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163swqtqfqx.html


<!-- 参考信息 -->