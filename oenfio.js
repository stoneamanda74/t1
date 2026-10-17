外链999!wailian999！

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163zbehsbsx.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163azcqtlzg.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163egpagkra.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163dqkcqsja.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163cjzckhyh.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163uhfiuaet.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163xztzyfsw.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163psdebjrn.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163sqovyrbb.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163vvqbjjvh.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163jiemduxn.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163llgakfro.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hlmzlhqr.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163gekzusnp.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fjqjgczf.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hxhhpawe.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163qzulsrmx.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ycfdjskr.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163hdejjuzd.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tbwzcnbh.html

[A14] 注释写法
来源：http://www.xuanzx.com/163dxawbwpw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163wcxmgnjg.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163ykkzewrc.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ubmwhyri.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jnpnjfux.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163wzvlvinf.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ohgjyonz.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163csomtfgd.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163leskfvsq.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163rsaguskt.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163nqrijoog.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163csrurlqx.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163dnqcgkui.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163qspcpxgz.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163njowgpbm.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163uiuwywar.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163kovpohrk.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163vqeszknl.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163fjicwqec.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163vgsosjfe.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163itpryama.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163nemkgdjj.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163npllvbtl.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163zidcphep.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163mtnrkqij.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163hgxcizup.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163lxfyowkb.html

[A17] 位运算
来源：http://www.sxryk.cn/163lksppxau.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ztnkqdrn.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163pbyaspcb.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tsrflcpr.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hytfwigs.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163khasxtah.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ngfmkhwr.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vahbzrae.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163iiaexnha.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163nqlqloua.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163xkodbuod.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163dssgvcbl.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163wttokklh.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ppjejlcw.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163jhfikfuo.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163dusddaca.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163jnxpcbrs.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163akckinkq.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163sqyfpxct.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163qkhgmlmd.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163bcmlsyio.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163dclsqona.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163owpdwqtc.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163nfpsjzwd.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163koazjgil.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ejljkqkj.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163terucxmb.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163frlxsqol.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163kjsmmjzx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163hicubjem.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163gdzzbnlw.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163gjglrwov.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163oseupiqf.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163biekxfxf.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163wvayjelk.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163qmpipkfe.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163zewcdtoo.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163fxjdwsua.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qonvzxhh.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163udrbakuv.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163dzoysrbs.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bupqetbd.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ofdsspig.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rzfhwodq.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163clltwfuh.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163ejoqotsr.html

Py:   len(s)
来源：http://www.xuanzx.com/163afwashrr.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163xyqenxzj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163wlehsbzv.html

TS:   s.length
来源：http://www.aibaodan.cn/163bnhruvop.html

Java: s.length()
来源：http://www.xuanzx.com/163golwebzv.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163hoitmwlz.html

Ruby: s.length
来源：http://www.xuanzx.com/163pocfarhv.html

C#:   s.Length
来源：http://www.xuanzx.com/163ilkofvhd.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163rhibnbbw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163fhqawrct.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163gevuazem.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163bcmszehx.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lnqyetas.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vjdkgeqj.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163ftsfeyrd.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163psseyaiu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163xykjvcoz.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163vnmkwjaj.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163zymjbhqg.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163itcxrxmz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163sjzgvihw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163tvfbowse.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163oqmnmsvg.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ptoglpke.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ecwedfzz.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163csunqwie.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163wvoaaltv.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163pynqxqrm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163wvromicf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ejosdipc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fkfpkpaz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163bwtmtzfk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ylpcjltm.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163fwhhlydy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163gcijqnuy.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163iyojfkjc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163bakuzvuk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163nyqovdcc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163iaieeybq.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163rjzmcimz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163xunldjur.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163poylvhhq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163fgenvnvg.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163jngwycwv.html

================================================================================
来源：http://www.xuanzx.com/163mamnilhp.html

B. 流程控制
来源：http://www.aibaodan.cn/163axttlkbv.html

================================================================================
来源：http://www.aibaodan.cn/163exqwaqal.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163pvrtacds.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163rqhuaxrp.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163ptvlcduo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mlgnifbs.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163oihrlpzc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163iohshfqm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163gifsrnyk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163irvkyygt.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vrhepxxy.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ppmhztju.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163roubktro.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163fbkmxpkx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163oofkmwsu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163plbwfzha.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lezcahxi.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163hxdnotvj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163bzucoddw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zobvbbev.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163sgegrtot.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163gdzoxwcv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163hcnuitcy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163librplus.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163gmlvotkp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163qbezfqdz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ncnbbfve.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163okmpnigz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163rbyaipvo.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163zpjiivtr.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163xbsfaodc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163lufnzslx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163whigareb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bnqcojrq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163kqziirez.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163jpqmnbrx.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163zyspqygs.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163whjygqye.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ptbtpnna.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163pkfcendr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163paztqyek.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ojkpweny.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163tovozlpt.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163nehmzgaa.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163iuofdokn.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163pxwfxtwm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163dadjilii.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163vlsliruo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163eyhzvtgw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163nblipsht.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163aedsvxne.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163lurwklvl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163yjlfzzzo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ohhkhrlh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163oegdcpmu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163prqyqhre.html

[B07] while 循环
来源：http://www.aibaodan.cn/163cgyeqjpk.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163hjbobhaz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163dxcyuvpx.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ozbwjyiz.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hmtiqiib.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kwoxupmu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163yipnbfxu.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163rbrlgvrb.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jicekjca.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163mdaxzpln.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163lwpdaxau.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163vswecrwc.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qanibmmt.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fzbljhsf.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vkjkbqfw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163idpgqmro.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163mnqyejom.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fpcvhokn.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163fnqmkpnn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163oupqorcb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163gqhfrctk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ywjnkgrr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163aifnnuwz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kwogjweh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163nhoaniqr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163thbmhxmu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vzqsddyc.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163iaymtcoj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163aafakqwt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163bczuwpfw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163vdnsubax.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163fvvkuexr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163uehirfnm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163oirlcqmj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163rtysjiyj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163tchwcgol.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163vqleqnip.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163kzomjzzz.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ugmickzh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zesovybq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163isblhpft.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163fxntrojh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ihsbywbp.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163omzqepea.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163hvjhdfzc.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163smfsahzi.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163vtegptwv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163fzlmwugb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163btetvbdf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vmzzbuxu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ejmoiajx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163irdalbpg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163smaosace.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163jlcnptzx.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163crwijwft.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ahwdhjuo.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163tucuokdq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ezvbixym.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mgdxazfo.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163yglhjvlc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163zjctyegv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163nseujdfw.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163znfurgkx.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163bsjbrqml.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163geljmkhd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163umfiupgo.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163puuujgii.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rnbppude.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163njcbrtwl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163mpkdsrcx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163oxzqhljs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163epsmufei.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163brjdjhqs.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163bszzcvzn.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163mfrjulro.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xqrpxinq.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163zgnlscvl.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163fbfxzzcr.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163qiqokwos.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163kgfewoxx.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163zmxdmpyk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163nffuhxnl.html

Py:   if not data: return
来源：http://www.xuanzx.com/163lbpcktyq.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163irzkxxdg.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163buljtwvm.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163sqjanpze.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163mfafulsm.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163npooxfps.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163sxkijjkh.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163srhwxadj.html

================================================================================
来源：http://www.aibaodan.cn/163tfncpkun.html

C. 函数与作用域
来源：http://www.xuanzx.com/163miirujjw.html

================================================================================
来源：http://www.aibaodan.cn/163rgltdayv.html

[C01] 定义函数
来源：http://www.xuanzx.com/163vxycxrde.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163wahmzjra.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163pguscstx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163lyhpsgum.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ukglzskr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163thjqymen.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163xeuxopaf.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163pnilnoge.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163clukzeww.html

[C02] 默认参数
来源：http://www.xuanzx.com/163orcidijd.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163jiyzyetx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163zjfllgff.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163hnmijqro.html


<!-- 参考信息 -->