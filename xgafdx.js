外链999!wailian999！

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163rnfaoufe.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163fzpkfvms.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163szbsbfbi.html

================================================================================
来源：http://www.sxryk.cn/163kuuoboie.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163mlgqqtnd.html

================================================================================
来源：http://www.xuanzx.com/163kkoirmfh.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163qmjczmjr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163kqoisxvw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163eppdtliu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163bybivnuf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163hlujecnc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163fnmqwbal.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163lihbitke.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163hifugfsc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163icikqqdb.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163oynxvzjg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163imnayuqf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zdipfbku.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xibcjsef.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163filkjdex.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163eafzrrga.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163rxruypfv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163hhdelgrm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163swjuryod.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163hlrdrfcq.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163qfwvgxcg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ndurklxm.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gwdkjyqj.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163eogukwtz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163szxqnsik.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163zetjwnyr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163lvotcchm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163wdwryjeh.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163okzyetvj.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163fytpolhp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xxpirhnh.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tgsdbvsd.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jvvldlud.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163mfoizcmf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163jujkkgzn.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ysgogbyh.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163bascrglp.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ttssxent.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163itaghnyd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163bnhzuvra.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163asmrgxpr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cmnjkyum.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163dabbxzba.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163wzjebqvo.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163afpcdkiz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163vpvcabhf.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163oqacqsti.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163erkmervo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163azqelktb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mxfmvgmm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vbdxbmhh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163luypeavg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163wgsikhax.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163pnkjegcn.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163enfvpwwl.html

[H07] 断言
来源：http://www.xuanzx.com/163yrjkcpwg.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163zaujaboj.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163lewqbgyr.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163cblxuyfs.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163owqhdoio.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163jyvzirfj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163lyeggoro.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163yaazezqz.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163pcdpkjch.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163uvajpunv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163dhotfwre.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163evtjyyzj.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163dkvkoanl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ljaxtjxq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163jifyxfhs.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163zwabufpl.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ohdmbzhm.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163msqjropu.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163nlotxcfd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163gogkurcn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163mwntnaea.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163rwjhvqxs.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163spqrnili.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163oftutcfm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ghiyhttt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163sjcnugxn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163izoithqh.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163zertroob.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163bopyegbs.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163fyevtnut.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nxytntaz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163spqoomti.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163mwidvgvq.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163qjzisvnp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163qpxcnemf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163nfyaljzh.html

================================================================================
来源：http://www.xuanzx.com/163kiyzemwz.html

I. 正则表达式
来源：http://www.xuanzx.com/163urezqphe.html

================================================================================
来源：http://www.aibaodan.cn/163dbsafodm.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163mufwyexu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ytlquugd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163hifoxnzq.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163klcirfkt.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vziwbrmk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163acqqdavo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163jehjiqbb.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163xiyzsdsc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163bebbccgx.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163mcwqdzuq.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fdekyghl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ozrwvwjo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163xjlfzmlu.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163idcpdfvg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163wgrofhwv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163hrwsamgv.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163cmfdsijp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163mszfyhnq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163eiupcjbe.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163pzewoeqs.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ufhuyijx.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163bojtzfzd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163lapvtvne.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163zbktbbzx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163yxrjdbud.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163iierijma.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163cmtjpfnl.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ckbjgobf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163upxcolzi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163suuqsjmv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rkrhelwt.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163yxrqprkk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163zgdeywyk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163dyydcety.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163bnkblild.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163caxiexlf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163qvgfobng.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163dqovazvz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163znoaemnb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gdbfodeb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rldnatcr.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163barepbjg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163txqoamec.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vmznfryw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163wshoicnv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163bwtqsmkb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qeewyzzn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163cfmwpjqc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yufrvzoq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wxtolxbt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163zbkvysrg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163usazvtub.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163yuzpgrat.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hqmtbcmw.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163pnrxkabq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163orjqytoh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163iimmbusd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163jmxrbkfi.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163nmlteafn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163xevaxtiz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163rotomxnz.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163bvidwdqv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163qjtsflxl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163hoyyoolh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163pqgixmlv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163zgoswkij.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163lleobzku.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ibyfokrc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163tdctfray.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163arsjlacw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163uvigklln.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163rwmnwgin.html

================================================================================
来源：http://www.aibaodan.cn/163qypbfcap.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ftqwizqx.html

================================================================================
来源：http://www.sxryk.cn/163ctyfvvyb.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ahbbkfub.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163kgujgcbp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qxarpfxn.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wcwuczbv.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gfsibndr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163vehevvhv.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163fuamxiap.html

Ruby: Time.now
来源：http://www.sxryk.cn/163bkjejrxm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163hknepeqx.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ebrxzuto.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dsirhfoy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tepiybic.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163arqdqctr.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hqnvrxha.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163koqroglo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163jxcyvlbh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jkzzpjkg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163jifdicim.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163amwloixr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163jlitayjo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163nzsdifhe.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qesnaytu.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ioryxejr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163scjxmidw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163apxlivti.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163sehtxggl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163onkcrsre.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163bthfpwzs.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163wsssuyoh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163reievbib.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163jxhmtjka.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163enwmhbge.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163owrzzddc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163bftvcqrf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ihlgjqxq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ldfnjmkr.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163anfhfvbz.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163uponmiup.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163chakixuq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vsfopxre.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lmdgvhtw.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163oycopkpt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163cdsaerpy.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163twxvzmms.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163dqeucluz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163kdbcgksg.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163pwclbkqa.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ynraazdw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ctocerbk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163pwcmunzr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163lcfdtnnf.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163cbdcinhm.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163abcqslhu.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163sofbztgg.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163rmxgstzl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nlhqfheo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163levpxdqi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163kvvftscq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rzvoqdlo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163bocccwob.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163pzvlyvol.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mbcgucau.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lwyfczxz.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163jwlbmjaa.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163hjdgfhhc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lkujglqj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163zamkhvtp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163xiwtnztm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163iyspvtag.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163mxllsooi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163nujebbns.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163aoqfaskx.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163lnqljtjc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163jsvnqddl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163skkrxfiv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163cghnhylz.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163eoetdmlh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163hjagyouo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163drzayeij.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163kpmlvtfh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163jjvjndqc.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163yxiodzga.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163wgbgfaut.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163qnwojwwo.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163euxvzqao.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163lvbplncf.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163oxkdkqss.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163wfeguclb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163cmmbbaoc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163eeemjqbw.html

================================================================================
来源：http://www.sxryk.cn/163dtnhhdee.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ybmyytwb.html

================================================================================
来源：http://www.sxryk.cn/163ussfdjcf.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163kalljdal.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163cphrjnpt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163oxkitbes.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163awqtyyyl.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rklvhpon.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163qwwtosxy.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163lqhaneyg.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163hvqkqdmp.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163tcxgktdw.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ckojmgkw.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163obtwzoxc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163wttnrzzl.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163fstnxlxn.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163jrzluufp.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163gkhoysap.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hdxisppt.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163zhlrnljr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163yscojrfk.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163oyqdvkse.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163esbcmdgw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163rmgbyiat.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163pykdakvc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163teqpsfte.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163phdrmbha.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163fdkgkgbk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163tiygvtrx.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163fqoabfpv.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163mgoofifs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163slkgujmt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163dftsoatu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fvjgrupn.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dkhwcxni.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163ukboxqbh.html


<!-- 参考信息 -->