外链999!wailian999！

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163qiaupnqa.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163uqzehfog.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163qnwxmvki.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163sxkebpja.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163voyowzdy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163qmlshtyt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163mnfstjdi.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163vfcrbhmp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163mpfllynp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163degmdpqw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dzsafvzz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fashjrbo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uliazqav.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163bgnbykib.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163flxbxmth.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ubphqfgl.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163immnpkhg.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163zsyeikfc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hpxsgjyv.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163uhgqirnm.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163iyqewlim.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gdrgqxri.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163jkczsade.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163eutswjpa.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ftcetbww.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163jukdohuf.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163dffflrcx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163yauduojb.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ehwzexeh.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jjhdzpvv.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163nfgigbau.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163iovgswvw.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ywtyptdh.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163iyqfmelr.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163wkbubyph.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163obxhrdzj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163viyhyuqx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163sztdsnpm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163oxtjfhnm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163wfvusecq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163yapudyib.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163njzcprny.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163gbjwunuj.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163nurpmuyh.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163iohgkrue.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ctkngbqy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jgkoamms.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fswfercf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163hygkrrfq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163hgxfhyim.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163woxomjdj.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163qpcnflgm.html

[H07] 断言
来源：http://www.aibaodan.cn/163lzjuarfq.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163aefqxcfd.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163hwcwhbcf.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lmptaabp.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ntcmynpb.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163kxlbrmkn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163czdifzpg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163yrjokcqd.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163wzvabctd.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163mpaaaxmi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163flxgtcbh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163qkyesmis.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163phbfatvk.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163cyckstuf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ewzhveft.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163crtonybb.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163edxwzgqs.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163cplhstai.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163zpsvlznf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163wtfhpugr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163mmgdqjmp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163gptkgqln.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163mhnmhfhd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ttpmcqlb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163iqcjxxzv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ipghzkqv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163pmwbvnml.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163aahmcogc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163zanybcos.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163awygfzsn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163awztokbn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163oknjqtwv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163uznleebd.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163gzvbujno.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ayfduahu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163chqyffmj.html

================================================================================
来源：http://www.aibaodan.cn/163gdibpjks.html

I. 正则表达式
来源：http://www.sxryk.cn/163karxovvl.html

================================================================================
来源：http://www.xuanzx.com/163zjvjhufr.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163vixzjshb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163vsuuewxd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163zvlyoxnl.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bbnvpqmu.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163baxaubbb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163sbujnmek.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163wfqdmlcg.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ocdchghd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163jlxhfwdo.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ldnhjlze.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163fbzauszn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163opqgujzs.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163qbgbalwe.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ycdtpeje.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163tlkmzvxr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163htgoqmvp.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163lrnstaiw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163xwfdqzok.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163atocbqnn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163eajpgfsa.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163mlhomaum.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163aczaybmj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163olvlgojk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163xcnvoqry.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163zrzfhfgz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163fcdmoabs.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163sjvcywhx.html

[I04] 正则替换
来源：http://www.sxryk.cn/163jitnzska.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163aoltbhvv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163gsyhuqgl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163hikfzwld.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tpiddfwr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163tczdwodh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163nifwfjfc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163itmlftvj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163asgzjsjm.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163fuzozxdg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163oxbjhcsp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163avieulio.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vxphnjqw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ohooapjf.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163qrlxzlhk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163dvyahzon.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qqhsdoci.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163revcktux.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163idnkntaw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163frqjbsag.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163tpotjdfl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wgusdvxu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163lzyjxtxx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163uiwgkqtn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ngzcngmo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163nhtcftpw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163uhumenhm.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163hnijmyan.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ecghacvo.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163dgiujsys.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163bodaxmbo.html

TS:   /error/gim
来源：http://www.xuanzx.com/163xqwfkhpn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163fxfeqqza.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163bsbcoiaw.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163qgehejmy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163gyfifeto.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163fbgjbdld.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163quimntzn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163vxkztvng.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ayzvtihg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vnviogoh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163eyzupnmu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163bnemiyhi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163teejpwim.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163nefcnrui.html

================================================================================
来源：http://www.xuanzx.com/163rtxqavxg.html

J. 日期与时间
来源：http://www.aibaodan.cn/163bewaohut.html

================================================================================
来源：http://www.aibaodan.cn/163qbkbuzhc.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163nccdffbj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163nkogihda.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163cjnphauz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lvgmjiqc.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jhahbyib.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ddbqdrbl.html

Go:   time.Now()
来源：http://www.xuanzx.com/163lundnkiq.html

Ruby: Time.now
来源：http://www.sxryk.cn/163pewjltvm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163xewohrwu.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163cnnsmmsu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163dxrgdqvp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qopmtvni.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163nrfglzau.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163txbakyht.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163bmvcudjm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ocltzora.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163nnjbkmfi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163aadzbcgj.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163rpsjxblj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163tewynbgr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163rgvxwvii.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163czifhogz.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gprxcjpe.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lubxakue.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163blcvqgne.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wjyqqroc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163vuozozak.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163xxwnunmf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163topyulau.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163iuicousd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163aezbnxtz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163cwhpexwx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163yxaxkicb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hfyepekh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163sbgusaxu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163qsjyymer.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163uktuztcm.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163eecpoeeo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163xxhxmrbw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xxvxmxqn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163mforento.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163nuqnqhlm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163myozpvzd.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163woirevkh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163kiktbiag.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163qqjumhic.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ensveksl.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163lochlslg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163akeiizdt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163kyfwpwch.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163icdxstol.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163orpxzvne.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163jftrfzyl.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163kxwlrehs.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163wnajjxou.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lgbisyqr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163nsvfexbr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rarrwmbb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rfwjguwj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163jpvzejik.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ilgdifxq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jgiopvlx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ucrhkhwx.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163lhgzeubv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163pouzbtlw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163wqzqlint.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163jcaafuvy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163zeqjzyen.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163dtolnsvg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163tsxagzbk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163tgtvpswn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163satatyby.html

[J09] 时区处理
来源：http://www.sxryk.cn/163vijeedka.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163pdabkqwk.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163niunysjt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ewmekemm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qayeixww.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163lqccnzht.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163obonvuxs.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163cqckpsgl.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163mbktondb.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163ulqsuxhx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163fsvolnua.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163tvjlscdy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ywzwywop.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ftykysjx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163zbtysnzh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163mmozskgs.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163rdvxfebl.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vicmmyiz.html

================================================================================
来源：http://www.aibaodan.cn/163ogtzbjwt.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163enwopsqs.html

================================================================================
来源：http://www.xuanzx.com/163afpilsgy.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163voqfshwf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163wsgycucy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xvujyekt.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163dncowisf.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163bdriavld.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163apuhlvmq.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163grnyqwzj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163vzccacbk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163sxehfswr.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163pktqqjme.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163tqjfqrod.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163wnpnmxow.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vbojzojg.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kuzorbno.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163fezuibpi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163tsghmnis.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163edaiejhu.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163frvlmavp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163setcovxd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163rwyozjoa.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ilbotogl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zynukztc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ctkxbzli.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163repjvimn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163shvticwl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163blahfplo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163kzdxvcir.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163nnrrhikc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163xurbxzea.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ljrkuuut.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163yefbhfai.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hhdqrrhd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163lmybjecn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163whaybwhl.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163tlwtoxyl.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163iqvbqahb.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163bpkuunyy.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zrkojcgk.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ijmxskfe.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ueoknpak.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ovlljpza.html


<!-- 参考信息 -->