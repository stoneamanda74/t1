外链999!wailian999！

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163lcfewzet.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163ekgltgne.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163kuodtotx.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163pcmajkoc.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163hupiijpm.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163kenzfhej.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163mwxwvdqa.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jsdxrldr.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ljatxfhm.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ovglshmh.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rihcbuue.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163fwnyvhbp.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163isevaasd.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kllpxkzc.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163ubfrbswu.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163oelwkdwq.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163klgghmue.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163xplamzkv.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163enxnhlvx.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163mmixqiky.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163anypymzr.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163wdstgebp.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163fmphcikn.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163kvtgklvp.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vbwohctt.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163aidqcuel.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ebnbxugn.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vwweokuu.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163fhjtmxwd.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zlbrcgkw.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163mofiehvg.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163odagqsro.html

[A14] 注释写法
来源：http://www.xuanzx.com/163zqlvqxsm.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163oryvfdrz.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163lbzhvluh.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hbzrpovm.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163iqoxijeg.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163jcqfplqc.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hvazkcvu.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163spkkgump.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jhtqyxvf.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163mcgeaddp.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163wlabflxj.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163amrxcfmw.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163btxhquhw.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163yyefqpev.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163byiadtwh.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163nolnepvv.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163vaxrllso.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163neicshdn.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163wphyihnu.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163wsgxyfax.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163zkjsvrzc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163emtpwdqb.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163oykfnhir.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163awvlbyer.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163hsrrbkme.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163fwxwbedp.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163vpmnprjk.html

[A17] 位运算
来源：http://www.sxryk.cn/163ptumbrfl.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163gdphirsq.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163yvljgoxs.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163aqlqxdze.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163fijolota.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cyjmnflw.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lwrltssh.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xjwelqgu.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mfuathke.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163hkubmtyr.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163oplydlfa.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163nrojkovj.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163pbmoxarv.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ugclsapn.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163uungbbpy.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163llrvnmdl.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163xhoxrhny.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163llwjbiai.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163htcdaoiv.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163mkmobbva.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163xkewtffd.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163odxktmbn.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163iuvrzvyg.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163bpebwfce.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163boxrdzyj.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163lxeglvub.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163udqrupms.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163ipxjajxl.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163ntgjuenz.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163wkxfqast.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163rjqfzavl.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163iaakupij.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163quvctkjp.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ggotrdtz.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163ehcrbawg.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163sptynuik.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163lrsrcllo.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163omyesufi.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163umicinpl.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163svmzkqwr.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163tvssbptj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xbbgjqot.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xynmdecf.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jhpmeigc.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163rkkfuoue.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163ffltdixw.html

Py:   len(s)
来源：http://www.sxryk.cn/163dqgzoxyr.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163kxpddvbc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163moqemowb.html

TS:   s.length
来源：http://www.sxryk.cn/163ezxfqhbt.html

Java: s.length()
来源：http://www.sxryk.cn/163upaycqja.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163mwslxcrz.html

Ruby: s.length
来源：http://www.sxryk.cn/163gtsoaaty.html

C#:   s.Length
来源：http://www.aibaodan.cn/163nnppptbd.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163zqdjpzlp.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ncskixxi.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163cvgbkygq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rpflnaym.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163edmsdjuo.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fxbomojw.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163xutupwhp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163jqlbtmxl.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163jqgqmxzp.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163vovumbov.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163cgiaetcf.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163mgfocrct.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163sbwbmavn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163vogtpogm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163jkenonro.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163hjjzfxlk.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ahvbzafs.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163jgzibbpu.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163pwxpxspo.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163gbutekye.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ydvgkbkb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163dmdiyfya.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163srwdtzwf.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163mgkfltkv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wkcfqqzs.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163npvprwpy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wisekmwi.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163jzwknrqo.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163trzgizfp.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163oflqcsss.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163hxauwgtt.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163qjfqpdac.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ftgutjje.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163xzqrvhzu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163aojpqxyy.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163mfgthayo.html

================================================================================
来源：http://www.sxryk.cn/163fquxowtx.html

B. 流程控制
来源：http://www.sxryk.cn/163ljqxrkbt.html

================================================================================
来源：http://www.aibaodan.cn/163mecbhowy.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163iqyderzu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163jnlpppng.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163myeoykct.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lsokmsdt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rfdmqfqz.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cmhydmfn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163kvuahykp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163avripvny.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pacnbvno.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163qbjrfyyx.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163wnolwebw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163mdrzxlvj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mpluqylf.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fngipzgg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gqjsmhzo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163xsxtnulc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163wgjngmqn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ofgctply.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163irvdkphc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163hhspzjtw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163kqijhpfa.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163jayreuhg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ulvoaczx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163hloxrlvh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163vaffaaqb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163emukenof.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ckpvjpdy.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163zgfyvrsj.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163gahlhhpl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163hmesdwhg.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163uuvbdhvi.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ypgiqwqv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163bfzxyuyk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163wludzasq.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163vulowbnn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163zdyhjbbu.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163khzqrdxz.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163cgqhidrr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163iueisaqa.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163jnexqjms.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163aypcxxhz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163fmchiqit.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163qlffjafb.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163wilrxzqd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163mzjfshtz.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ffkbnahd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163jzplifso.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163oswvwdts.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163lwcfszde.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163mmnpjqtx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163iymrouts.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163huppofyk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163xwrkiyag.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163frbzpdmx.html

[B07] while 循环
来源：http://www.aibaodan.cn/163eloneowc.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ixnhyhsy.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163fbqrtfng.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gbkzfvnl.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kheraiir.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zyhszwcf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163rqhlvqno.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163nvvtedur.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fautpftu.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ckmdhpfz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163cvwylkqb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163zlckntpm.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xglltncf.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tzetwbmd.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wxrgzvtr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163scavaoxw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163vmdmjclx.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fkieacqg.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ickggtuj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163kflajoel.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163rbxcqgvd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wrqsvbac.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vurckkhn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ltteuhoz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163wcpzezzt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163qsxfcqil.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rkhtuznf.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163esxekjan.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163hszkzzxt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163otjgmznk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163xnzycvlt.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163hjccvwdn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163gavayjoo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163bzzloruq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163pqbdbppm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163fvkrqwbx.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163uizqjgew.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163dpvxahiy.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163yzlquirz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163spywngvq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163sdrhnkrc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163waqmqcqe.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163zjrddhjv.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163bcmfpyzi.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163erptcmdp.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163kzttszyy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163cyjtpdxt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163nvbaigri.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qfjgdknr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163upjxsjsx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ywadkeja.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163spytijpd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163uepjxvxl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ohdwsfen.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163jromitdi.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163asoqljek.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163jrcdevaj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163miwcvkdi.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163myixgmec.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163aemjzkvy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163oxugrbnc.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163bmowadrg.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163gpoxswqb.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163gyzvfvzs.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163lvagynyi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163umkcyfgi.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qtowlvax.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163evckgcpe.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ewywpnsl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163uzbuyvvx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163oeuqbjwk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163smzpwfzl.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163dgppqdeu.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163bknlczwj.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163aaensnht.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xvdhhwrm.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ltpurany.html

Java: a && b || !c
来源：http://www.xuanzx.com/163qjesawpi.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163hzbldqly.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163atrsjcyr.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163iufbnymh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163bksuwtkg.html

Py:   if not data: return
来源：http://www.sxryk.cn/163jwmjnaol.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163fnwujkro.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163wlyefrbm.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163bfzaebfx.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gytaaked.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163owajjckz.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163gyicwnaf.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163hfddtlis.html

================================================================================
来源：http://www.sxryk.cn/163akrimffg.html

C. 函数与作用域
来源：http://www.sxryk.cn/163lokmeiuk.html

================================================================================
来源：http://www.aibaodan.cn/163pcrrrupx.html

[C01] 定义函数
来源：http://www.xuanzx.com/163wvcmmufj.html


<!-- 参考信息 -->