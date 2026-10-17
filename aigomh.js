外链999!wailian999！

[A14] 注释写法
来源：http://www.xuanzx.com/163sfebszvm.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163ycdwtjzm.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163ocwmdimv.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hblzuyga.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163pigffngw.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163jiacdpqi.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163tneqaxwe.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163jfdvfkfp.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jakfdshc.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163qwamihld.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163alerqepd.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163xnjngjop.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163fkskjvjm.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163wvovfxto.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163aacfmplf.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163aeokursj.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163vgzxfkmy.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163godqvmrl.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163fwdtflmd.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163qvbvmccv.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163vqglyhlk.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163aufckgmr.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163mfnsxgyl.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163wongjslr.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163mxhidtxo.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163basqfibh.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163azlssylh.html

[A17] 位运算
来源：http://www.xuanzx.com/163ooniihjn.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cdfaevhe.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163ldbihydf.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hjnsozmn.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vnpzyoyh.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163uaiyraxq.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163npywkquj.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dkhlydir.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163uiqpqswy.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163pzmroedy.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163wzabhujv.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163jaalzzty.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163dduvcgra.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163kxujddqm.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163rznixbkc.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163qtwygell.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163kwycscab.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163evqrinrs.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163totqtpsx.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163ijqmkvaf.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163orukoaxv.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163giimwstk.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163nifowqnw.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163ceufbqcd.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163eaolrkpr.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163hwrxnnfs.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163apqxbfjw.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163nbuwwdqb.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163ujdjperk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163afadflzo.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163wmwzbobi.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163ecrvpxwr.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163laqcjltx.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ftsjjrpx.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163jvhrogaq.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163ohmkpncl.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163dzzpepza.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ujwpitjb.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ahtblzum.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163rwrasrud.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ryyljfux.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163xqlxctbl.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yahevwsq.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163felnxoqk.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163akblkyfi.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163rqnymjzy.html

Py:   len(s)
来源：http://www.aibaodan.cn/163knmoxsah.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163eccddaxu.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163gwvknriv.html

TS:   s.length
来源：http://www.sxryk.cn/163pwkfbhgx.html

Java: s.length()
来源：http://www.aibaodan.cn/163gptkbilt.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163npwzwsah.html

Ruby: s.length
来源：http://www.sxryk.cn/163copeprhl.html

C#:   s.Length
来源：http://www.sxryk.cn/163rmknwwsg.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163fnduwbzi.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163hptiqbqm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163tlhlosil.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163zmjqxwwb.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wawrezhr.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163pwxujeqp.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163atlybezr.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163rjgikglx.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163jwfyyqlp.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163xmcsqmen.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163agghtoof.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ounsroiw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163mnswgoii.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163lofexlcg.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163hspsetsj.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163dlpbfdau.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163kjzxulps.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163btfwmptd.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163mrbwqrng.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163dmwnhsgd.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163eomitadb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163vjnjioth.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ibuggysf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163bjtgzxpy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163tctafjba.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163knfhbeej.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163eluvjhso.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163bpkilazz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163usieiztc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163kvuorxrj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163qhjswngf.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163rcaickka.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163slghrizh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163wphjlmlo.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163snslngvu.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163dqyltxev.html

================================================================================
来源：http://www.sxryk.cn/163swqxbcxw.html

B. 流程控制
来源：http://www.sxryk.cn/163wbwcklso.html

================================================================================
来源：http://www.aibaodan.cn/163aiskvfrw.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163litxqtjh.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163mdowvrts.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163uaijybrz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tjkrcmzw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kvwusvjx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ngkvujel.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ngpzpmmc.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163amchsbww.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mnkzzbre.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163eoxaoglb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163zpiccwyl.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163pyjkxlxl.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bktdlsyr.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tgcvqqff.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163sonjlmoc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163usiqezgr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163qpayzryj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jhqjmzjg.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163zsprseyh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163hckkkumf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163yznrovwd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163jsadljbg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163pwtklzaf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163sckalvkc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163emlzivgr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163zricprxb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163vnypwjnx.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163ujlztmll.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163lkstqipe.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163hwlfmfbk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163vnanhmfw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163kaacmgen.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163vwvvwiaz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163qhjidays.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163xjctjbsc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163zuiggnwe.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163xmidaurt.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163vtdxtcra.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163kkebjlzo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163sanzepxk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163iwlhufnq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163cwmeouti.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163qfxeedqq.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163lnaownim.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163piiqcpti.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163rhspweui.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163pqesnbnc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163fteyuldc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kqoayhxq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163oqjjrwwa.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163gvujlrzh.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163evkceirl.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163evltsnbv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163xbtqsizy.html

[B07] while 循环
来源：http://www.sxryk.cn/163mksnwhee.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163nvhaivai.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163cyflatud.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kmipircu.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bidntunz.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pfnsstyx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163nheaskid.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163dzmegphs.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tvelptrs.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ozkxqasm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ohhuzbdr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ibngarnx.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fpjmzyhv.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bzgpcuwq.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vvvkiaaz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ntepwnlb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ftosfsyv.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163aidgdcmd.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163yioookqz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163gkuiymcv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163nlcjzlnm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ghccxvqc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yfbnvrlr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wtwtkjzj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163iwsxbjzl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163zgwibbva.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gialyrki.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ibkhmjhd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163bcpaassw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163demwrsek.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163xqnzihko.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163kbpidqao.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163uktsgtzn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163dpottzjw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163xbbciujl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ptavhuia.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163nouggjtq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163azmwcmte.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163cbfdkrsh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163smhpeviq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163endlfxje.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163igwpxapf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163guhekrgr.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163izlrvvpj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163gyannouf.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163vrysmhje.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163fdvbablx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ipucyjgo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ikklrrtn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hsafnhok.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ezmqrouo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163pkbwsabg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163gexqouew.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ccedytkz.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163mprpcnhn.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163miqwiawt.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163qhjlmzqr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163uvaucrir.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163bnwmolim.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163lutpjqom.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163flwhrqnv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163mkxlxxcq.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163nwaumbwx.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163wvsmnsqd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163wvsfliip.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163esbayxfa.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163eqldbzmq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pcnzotbl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163lftcoluo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ghemuylb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163lgndonrt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163bheijcsh.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163yxqppglf.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ccnexfyg.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163jqirzair.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163kgxemxtn.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163jzvqyktw.html

Java: a && b || !c
来源：http://www.sxryk.cn/163mbwfbjwl.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163qmdzjvpa.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163bsnrpqsa.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163jososrlc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163vnuyjlib.html

Py:   if not data: return
来源：http://www.xuanzx.com/163yjpmqngb.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163kdprapgf.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163avcjqxgb.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163lnteghef.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ahxfinbq.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ualrrmlb.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163xitnaxkd.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163qddbztub.html

================================================================================
来源：http://www.xuanzx.com/163idlfsuvf.html

C. 函数与作用域
来源：http://www.sxryk.cn/163iagqhjel.html

================================================================================
来源：http://www.sxryk.cn/163satjjwba.html

[C01] 定义函数
来源：http://www.sxryk.cn/163vuvprrhk.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163krlpcear.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zqxrtqxr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ohglmmws.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163nemrzjxf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163opvfiroy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163cetgaadq.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163hprvsstr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cuzougzh.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163jkenzrsl.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163udnhwfsg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163inohmbgd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163mmwugrvf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163srfdxdcv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163tdooydgs.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163sbltluxy.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163dlpdlmpi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163uxqkmeup.html

[C03] 可变参数
来源：http://www.sxryk.cn/163vuzwuctk.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163enwsiycs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163amyfundi.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qkrnaijn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163chonxjwl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163lziqvbqs.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163toqgtcyl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163tanefadb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163sigxvtmy.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163lhdezyce.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163famkeeby.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163pyvlgorx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nbuxucko.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163azyfhvde.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163tvuegunj.html


<!-- 参考信息 -->