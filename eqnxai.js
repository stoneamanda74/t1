外链999!wailian999！

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163aobqyzse.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163elxbvijc.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163nrsxqyrm.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163uzcctuim.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163nxhzulod.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163xengbbtz.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163cfipqbuo.html

[A17] 位运算
来源：http://www.sxryk.cn/163udshzvpl.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gxtjyusv.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163pxjpnuux.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fatndiwu.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163zmgjkafg.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kdmwxlzm.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dmovobmh.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fihegbra.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163nwvqmzas.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163zwmkeyto.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163hxzyjkzf.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163pxpdyvai.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163bqmcgqlk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163zzajfxms.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163nlkubena.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163ddsoxykz.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163ehofnhmg.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163ylrbdrte.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163dldvmieu.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163zjmthuxl.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ykdtxpzy.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163kavcaqln.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163bmzqapnt.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163mnwaruii.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163cnlmgndv.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163jxxoqpfi.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163hmpvpdoj.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163jsvewnby.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163jipuotjs.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163qswrtkqc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163mhrkzwbx.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163wivprgnl.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163nqqojffu.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163zsclaacn.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163jnkrhjss.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163lptzytly.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163opowvymi.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163tqvudjgx.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163supwzuaf.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163xtbgvgjo.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ytjlzuhx.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jwzkimxv.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vrtpbnzj.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163btvuaizi.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163omzwkeht.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163gweuoqjl.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ayuljyst.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163qseuhxkd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163ukrytrib.html

TS:   s.length
来源：http://www.sxryk.cn/163aokhzqyb.html

Java: s.length()
来源：http://www.aibaodan.cn/163zewcshzf.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163rjcaggtv.html

Ruby: s.length
来源：http://www.aibaodan.cn/163uoiyvrkv.html

C#:   s.Length
来源：http://www.xuanzx.com/163ygkmnmat.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163icftmyej.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163xpahgvoa.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163rwdwmhqn.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qpeebdzd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163wivujjhf.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163dvehkmvj.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ogpgcarf.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ljckjyex.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163rwekvyhs.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163hgiulwrc.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163gyenydhf.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163fyvtqusz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163tefwlzhu.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163iqfjobja.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163xpyvlpeb.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163wlicemyn.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163rmuucqqg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163tzksjtbf.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163yqdxsuht.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163lqnvxnra.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163hmtvxlqx.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ktqetmvd.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163aluhxulq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ttijdamv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ibbfuvoq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163darmnumn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163mmtwojwb.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163qlbqaebo.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163owhuzkgw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163jwxziuzp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163spiddqlm.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163mkbqagip.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163buvhuzne.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163iifsecbi.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163kxqnnrrj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163jvbsnrvb.html

================================================================================
来源：http://www.aibaodan.cn/163pknsfkqh.html

B. 流程控制
来源：http://www.sxryk.cn/163qcxemqun.html

================================================================================
来源：http://www.sxryk.cn/163aoxuaocn.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163xjlsibyu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ufykisbw.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163hifcuewu.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ouhvcjuc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bhyqotkg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163udxbewjv.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163jijmxzmt.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163pkjvvehm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gdabhimx.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163xiocfbrj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163emdfifqd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163dajqdljr.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mtmdxdqs.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tazxyhkk.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163phhrcxgq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163diarnrcq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163fegimitl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ayvmtnpw.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163yzcmolbd.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163kzlfblfw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163cxafmdge.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163nbabpuuc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163liccrccz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163lrcebvpg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163qxqnjoks.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163cwoubtzz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163rkutrmnt.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ezivmlic.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ocdzcbib.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163mwimjssp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163aufsgkpg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163blhyplln.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163eghamsvn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163bkufarzo.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163loflwmbr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163mbuxrfzp.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163vjqdeaqb.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163vwpdwpum.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163rfcszakd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rrfwqoyq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rycwdqwf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163oeeirlbm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ubptxojd.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163trfpdqav.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163vpjjttcy.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163baafxfhk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163cifzrgeb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163dffzfffp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jkpxutzs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zvvobjxh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163rsqvpekc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163mrkmehag.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163dyiysdja.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163yrtyeeca.html

[B07] while 循环
来源：http://www.sxryk.cn/163xsiixuaj.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163gpqdbvfv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163kdrbnahe.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pczxykla.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fczlslhz.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ggvbqhvg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163wwwgaqay.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163bgxkycso.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mpfytihm.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163gqfdoief.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163jlyaimjl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163bvcednpe.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fflldwgj.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hltgslqw.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163tdmhhwgg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163vtzqfigy.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163tnwwmttd.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kunqwgoz.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163vxvlayke.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163uthklyei.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ngqnpomc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cowupzsx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fqaqmjjz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ektddqqe.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163smhfdlds.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163vcxylxqu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ldivymzj.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163lnwhqilm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ujxgblwj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163jalgmgjf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163anegscbb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163wcbkrime.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ewsdwdhy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163qaixjvmn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163kudkcenn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163czjcpeeb.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163cglmhdpk.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163soylwwmr.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163boxzyuyt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fqnuwmsu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vvrkchfh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163nuzwdyhk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163pvtskzal.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163cygssdod.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ckulatlb.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163yqgxvbil.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kxrrghwl.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163lpebdmys.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163mrhesoqf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vdhmwwcu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vhyaikdx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163hiclknaj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163rnpaqjee.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163opbumbwc.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163dixjhksp.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163csmjdbgd.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163facbiuyn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xaegqhro.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163hudnpeqe.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163gskzjibf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ynwqtgwv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163nnepuqwd.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ejtfofff.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163chyfwjzt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163hzrcsnyk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163uqoonjvd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163poaszpxo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dcenjxoi.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ydnagoua.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163udbdbddq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163oqqndxpf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163spaejjbg.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163dyozdngg.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163svjtpxbf.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163oznhkern.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163uiwdinsu.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163cbezrjfn.html

Java: a && b || !c
来源：http://www.xuanzx.com/163jclerkjg.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163fkomnsvd.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163xcalhcyw.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163uqdrgxgr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163jsheeevm.html

Py:   if not data: return
来源：http://www.sxryk.cn/163weipevhc.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163udeckgmz.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163cjrcdmbv.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163fdwnltjg.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163aainfwxf.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163woffcild.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163bmzytlun.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163dsrvpbow.html

================================================================================
来源：http://www.xuanzx.com/163mvnapyzf.html

C. 函数与作用域
来源：http://www.xuanzx.com/163vgzbztrm.html

================================================================================
来源：http://www.aibaodan.cn/163nrqapcxv.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163hqcjvxzu.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163gyzmhmnb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163deiszgky.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163hvgiyhra.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ftwvptho.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163idkezutg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163fookoddc.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163unqdbbam.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pklxnlhu.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163yodwaccw.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163wnhsnvwk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163qdehdnwj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ahqswzgj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163xfgdraxm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163dysnkthz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wjetruyp.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163oexxnyee.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163djedsstw.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163eqirxocm.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163mxvmwntn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ggdsnlqy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xtwzhgkp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163onobyqxe.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163iopmzwbn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163kjggrxoa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163glqzhesu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ynqttvyl.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163vatibaez.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163jvqurnze.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163xfswuuam.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163vukkcyrr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163bgovugfi.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163bjpzfaru.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ksahfrfn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pdtiisix.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163igbtwgjt.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163qapmpzgl.html

Py:   return a, b
来源：http://www.sxryk.cn/163ijyohisi.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163mylzaces.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163lwwxilet.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163sbaakgmj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163molkptwg.html

Go:   return a, b
来源：http://www.sxryk.cn/163uzqqlwnq.html

Ruby: return a, b
来源：http://www.xuanzx.com/163drsrrdmh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163adyxywlg.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163vxhjukmn.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163yirpgjmm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163rwmozxsg.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163xywlehxt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163mivctumd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163yptaknva.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163wesrtczc.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163qlwqxhmc.html


<!-- 参考信息 -->