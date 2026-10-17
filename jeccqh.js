外链999!wailian999！

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dkuqcnrj.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163nnpxeilb.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163vcqdpsth.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163crsxjgwo.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163bkmmebpl.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163bmrymugc.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163qogdwecp.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163ziclulsp.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163fesebdid.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163daclghou.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163tsbzppph.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163accsjfzd.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163utngfdnq.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163ejwzrwcq.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163cmaojmmk.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163dhoqrguv.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163wgxsnklu.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163fokwnhwb.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163vukogfbo.html

[A17] 位运算
来源：http://www.xuanzx.com/163uxcjytqi.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163riwwwvca.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163aggmymuk.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vrfdtvvz.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163xjbpgrtg.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163exarefen.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vvawulrk.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hkvcwgdc.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163noswjwfl.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163bjterijb.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163vvewwxvu.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163xedhkzva.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163fcesbqqc.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163thfkblbr.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163afmdcbgv.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163rklrjgdu.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163bbnfzikk.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163qnncdpyj.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163tocgltrh.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163jubzaqbg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163pnwwrwsh.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163fsewctso.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163tshtmerq.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163sxyhhgmm.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163mubqikgl.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163oarwlsih.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163tglzohcp.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163lhknxmso.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163crlvragk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163fmkslhfj.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163jjfoctko.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163jkozoljs.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163iwqzestt.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163mgzkvhyv.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163nktjlznw.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163imvzjhbb.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163suhbwhlb.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163wtvxoqgn.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bqmvyvsp.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ivcituhs.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163nuagvnyz.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bzrdnijy.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nbceffnw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163evhumzmf.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163zhcfdmio.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163zdkoxlfz.html

Py:   len(s)
来源：http://www.xuanzx.com/163irxqpoag.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163dudxopym.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163bxlnupbs.html

TS:   s.length
来源：http://www.aibaodan.cn/163cdmmcqmv.html

Java: s.length()
来源：http://www.xuanzx.com/163pwedhnrc.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163lliascpi.html

Ruby: s.length
来源：http://www.aibaodan.cn/163bfmeeuiv.html

C#:   s.Length
来源：http://www.aibaodan.cn/163umazlmrr.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163mvmhyhms.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163rdwlypqo.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163nuizvrkj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163tkwknvcg.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163upgxlqxk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163rsuvynuz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163isennruo.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163cmiiwnfe.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ctptbacp.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163jfwyakbh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163uomlhawc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163aqtcexjk.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163nlnfhqlk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163giqqpljt.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163fidxobpz.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163jcksqryl.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163audimpyr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163jmctzihx.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163ognxcdpa.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163eootjhvy.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163hpdxlhrg.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163iyinvwan.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163oveqpzbw.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163fetilxqt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163qkpxnhby.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163outfnpiw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163nlgcgnvs.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163evqtzvdd.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163ennzccjr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163halchimg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163pqratmpm.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163nadrfugf.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ymbaqwvn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163mlsrrztp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163pbplofat.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163fjroigdy.html

================================================================================
来源：http://www.xuanzx.com/163qgmduybi.html

B. 流程控制
来源：http://www.xuanzx.com/163iincayxj.html

================================================================================
来源：http://www.xuanzx.com/163tcbpgpuu.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163cdhmwacb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163utoyniuo.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163cmqugjrl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163tjqhybsc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163pngwxuot.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wvurjiox.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163egpsirok.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163makhkluu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hayiusun.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163kpugzkxx.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163ihxirqhu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163zscjagjx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163uhhrbxkl.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hesbxzsp.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xgfwuahy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163yeynokea.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163kcqtupvu.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fvxtgwcz.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163iqqphhsi.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163jgxnybjp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163nthxcmpl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163arhfzyiz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163opbozpvl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163onqsajsp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163tiyickvn.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163mjpcnfez.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163vcfgaijv.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163wxeuyshe.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163vhzwjyak.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ahocjric.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qwgdnuty.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163pnevvkpm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163uhpnvncu.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163bormxepr.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163izxqyims.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163xegouezd.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163jpcxghti.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163aetvqkvx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163wupqfpgt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xyhkaydj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163slwgaofe.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163lmzbfwqm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163evplkxzb.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163krwngcmm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163qbypylee.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163mmqqackt.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163wqfzmofi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163xjzkseck.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ojedtbit.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163oearpmjd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163mokayocq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163dviwvero.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163uguztesi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163cqrvokmv.html

[B07] while 循环
来源：http://www.sxryk.cn/163mvvutrnl.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163klrqcpcw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163vqagnxcf.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fwgbfzrc.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163doowjavi.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163htztvqly.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163hnqbrbso.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ivxuejip.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163eyyjxqch.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163wwiezlvh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163svmmynpz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163guabzfhi.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163aaoeyafh.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163sglffhrt.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163avpzxqiy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163accxhkkc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163sabdqyes.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ffwsrscf.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163cspfglux.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163twpcslay.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ngzvbbos.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rkgnokqm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pupuwsdg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rsgoyioy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163zvzlappy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163iigxsbrb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163oqpkbomt.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163cbpawzko.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163wzujawcq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163kdfrutfq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ztlonpkk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163lsrbrouz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ofpsslhy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163nbuophey.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163mifqckja.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163smloffdp.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163mcuizchx.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163wyeziojk.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163gwmtkfmh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lbsloifa.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bmvjtznd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ectryzqw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163pgsqwbqs.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163bnvipgnf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163eufpndxd.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163fjfhuryg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163otzfvsvu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163yeugeikm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kfclysok.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vckduiug.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163itgsptqk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163zxwekovc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163vatzaygp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163izwebvmu.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163fxcyvnad.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163pftyksnx.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163nenioygc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163naenacak.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163fcvbolto.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163lmvycwfe.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163hmjxvexj.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163gmzkodcd.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163qxpursmn.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ydnjfjis.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163xbiuthqj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163kedtqgxp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ieescbvc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163spqxlyeg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163dhpgflqq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163kgfzhnlw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163jvxloeja.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zomrkuwe.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ibivkxjv.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ndderkuo.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163usfvugic.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163mrxplscj.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163cxavyyjg.html

Java: a && b || !c
来源：http://www.sxryk.cn/163sotjucmx.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163gfrxlrvn.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163yjaavhkv.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163oeijqsbs.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163xwxzaxps.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163niuffjen.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163mqamhbrn.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163gjwvkyxl.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163uerbofxc.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163vegfhhxk.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163gefjbbdu.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ymljkayn.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163lgzgtbmu.html

================================================================================
来源：http://www.xuanzx.com/163cpruytsn.html

C. 函数与作用域
来源：http://www.sxryk.cn/163onrypenj.html

================================================================================
来源：http://www.xuanzx.com/163pjeslyoi.html

[C01] 定义函数
来源：http://www.sxryk.cn/163hgmkptyk.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163nuyvrxza.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fplprdmo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163xgwzkjjg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163keogbovp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gcrgmbtj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163isuxtdwr.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163jdjmzpim.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xgvdbwxx.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163xuhfkqyb.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163omrmvahq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163adydirgb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163fumbuumc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163cttlzddn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163qhwaotsj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163vboiobis.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163mdqchpbv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163uhjlkrrx.html

[C03] 可变参数
来源：http://www.xuanzx.com/163nnwhbvux.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163hyvimqhz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163vjtezamr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ftphgxrt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163tuykhqbg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163pssmomlc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163eetdosvp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163tyfrbnyd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163kkzaujkg.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ntvzpbvn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163fqpbjmju.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163nrbhvsvy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163uryoahwh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163elrxmzty.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163trwknric.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163pdqfpqqu.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xxgdsxow.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mlltolfw.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163vskrqees.html

Py:   return a, b
来源：http://www.aibaodan.cn/163grpevjpd.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163foqpzhnz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163tlhlxmhq.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ucuvixtq.html


<!-- 参考信息 -->