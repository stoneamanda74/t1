外链999!wailian999！

[A10] 生成随机数
来源：http://www.xuanzx.com/163ptbelxrd.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163fhycaboj.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163nuvvxwun.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163epkatoav.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163pmkesbyh.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163yqobatac.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163wrnmutas.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163gimalclc.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163lnjvcase.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163mnubqamr.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163fvnfiokj.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163duggcvoi.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mktujuso.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hqibkvmw.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163silixixo.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163ueomqgge.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163yvvdikis.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163molukzpw.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163ctrjikfk.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163jlejfqek.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163aqrfltah.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163dxoppwfv.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163glxtoswp.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163tcazkcwp.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163jdhhdvsm.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163ytcevxng.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163gzkdkkdd.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163qnllpfgp.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163frgwfkdh.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163enysjwkv.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rgexdqfo.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vfhwqdwt.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163wuztzdrv.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163geclpeua.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163nysxodcf.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163skqmwind.html

[A14] 注释写法
来源：http://www.sxryk.cn/163bpbcycpc.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163tmycgjuh.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163gtaojuoo.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vabpliuk.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163pewxjpbk.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163krsxyltr.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zexwqudg.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163mucjwixw.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ufgupwjp.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163gdsfhsic.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163xzypldrb.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163btaylima.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ganocqyc.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163nrdoywkq.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163iuugdfnp.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163lonzyunk.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163eynrrpak.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163sikwkmxi.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163pbbbuqzb.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163dbucwkbn.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163jdqkezhx.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163mthwakbe.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163rfwcczpd.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163urzvfaql.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163bktpgvpf.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163lveaaqab.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163cboabrch.html

[A17] 位运算
来源：http://www.aibaodan.cn/163pydqwzyx.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163sisndjxe.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163lycrktia.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bvnbwbju.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ozuoyitn.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mggfxnhu.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163mpbvmjly.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kkrzrwup.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gxtmfrso.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163rjpxakvz.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163xjplgltj.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163wpgqweet.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163qdkavcbi.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163kpyshdzi.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163jdquckeg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163dmgvqafg.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163rqdjsurw.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163yjugdkcm.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163skqohvhr.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163bbzavwny.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163dtoqahvs.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163fgywwepm.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163mkgvoipi.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163djinmvni.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163fgmwuaco.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163mvtkdzun.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ivpvpfrs.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163fpjgqpbm.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163hdmegbla.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163ntyxmfgm.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163vcliqjth.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163phvznhjz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163cmzdlbbt.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163hcikkrov.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163pmjumnef.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163wpalqazi.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163aodnyzfo.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ivkskayq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wolxiooo.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163dzzztizp.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ryxeqgqo.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rplunlvc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jluqauej.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zxdjgaxn.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163nbucjsjr.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163levrwgdc.html

Py:   len(s)
来源：http://www.aibaodan.cn/163lrwvdmzd.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163cstzrver.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163tacwlyzg.html

TS:   s.length
来源：http://www.sxryk.cn/163fmmcxbty.html

Java: s.length()
来源：http://www.sxryk.cn/163ukeblana.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163nfprhsop.html

Ruby: s.length
来源：http://www.aibaodan.cn/163wstbwtnc.html

C#:   s.Length
来源：http://www.xuanzx.com/163seqxpsgz.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163uncvbaeb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163qgfxslom.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163wjodivrj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163sqrysdxf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163pyeuhnap.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qqvgfaof.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ejrupsgz.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163svosklef.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163dmnyjora.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163xkzikheb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163fdnwnrcc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163hrluceor.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163vytadarj.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qwnsoogj.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163vdneswfb.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163wzeysknr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ejqxjgnn.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163wnauvyum.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163wxtanjur.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163xbjqimhb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ltixqloa.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163uvoujqcr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163gfsziviy.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163puuvgdow.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163dmcgxrub.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163tqxmjtdd.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163uadowtqd.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163jhugwqgi.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163fuktxzkm.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163idgtsrmy.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163teuqoxdx.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163mzcqiihd.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163swywypkr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163utahoiqp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163dxvveacz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163tteutbag.html

================================================================================
来源：http://www.sxryk.cn/163grtpkooa.html

B. 流程控制
来源：http://www.aibaodan.cn/163imnrsgtb.html

================================================================================
来源：http://www.aibaodan.cn/163myraengh.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163tqclghrk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163rmtmhyaz.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163alirnbjd.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tbqwcuur.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kfdsqcsh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ilhtbkbg.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163fualfjhh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163bcfcifrn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hcobwelz.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163jwakcqxv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163exxvruan.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163xqtsjwcv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163euazynqo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163shfuqpxb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163anykhioh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ufnoaqqe.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163tgzeyoxl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163eyevzvat.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ztxhgznq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163xraxntzj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163kquesmsj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163mixxgyfr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bbailyxk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163gnuwbwdt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163wodvueig.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163wofvmjjm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163bdlindxo.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163lwiowswe.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163mouhcqrq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163iterxoww.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163gqbggwbq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rhelapsy.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163nlojmdob.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163nfkxnett.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ilnyegem.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163bahpuifi.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ijvrpkjb.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163mukztsxw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163lkulqyun.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tfoaetgp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ibidvooz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163vlxaxmic.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ojsfbaek.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163rqrucctw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ohnrbkjy.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163xxagpkap.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163hggcrbla.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163tygqroya.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gpvhnwyr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163humfxptd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163cyvczarl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163scmqeekx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163zyelxkih.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163xcocafco.html

[B07] while 循环
来源：http://www.sxryk.cn/163ndgxmpxa.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163gmxupmje.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163kqywqdvz.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xiwsazwk.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163momccjnp.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pamdsnlv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163pmyooinr.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163hwljeigr.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ogcouruc.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163oqhhknmo.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163nsssxyjd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163xnohztbo.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fegjvlpj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cuxhrcnw.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163flgzxvpl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163lniygmek.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163fwknfpbw.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jyttdujq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163qtawrdcc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163agvnjmyi.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ufjkzsqh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163esmtasyp.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163smehhsej.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lixjmnxs.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163tdlnyaqy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163zedfxpyn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yxdirlmg.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163revjmzed.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163fjujuwzg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163mctsekvn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163dtntagmy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163cqkhfyjg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163xtiagrmi.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163shrvxstx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163unuegtxs.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163jalvkmdc.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163jsdpsejl.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163jwyixymc.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163cxhtrgmo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163pehzlphb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mkfofchl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163nuglafcn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163wfnuefoh.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163lynjaetp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ygdbiqkp.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163cpcoavfc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163lrqcliwk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163wteuoikq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dnxtjink.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hyuahzmi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163csgxsdhp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163jxhecffc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163kzlfnorq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fepqtlpa.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163spwtobqi.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163zusxzzjl.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163xwrpsila.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vxyhzzhd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163luzsjkrq.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163panbbrsk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xonmqmof.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163bhfakfxz.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163icuffuip.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163obtvprvb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163hxtygnqd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163swgopiyt.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kdycdmjj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ttfvtfpm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163fxhjwfhh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163kyutgddx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ivgiobhu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163wybtolrm.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163koxoqvgq.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163fmduwnnb.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163txoewein.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163vvvrgzbn.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163vpchmlsi.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163anywfsqf.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163oinumjtr.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163iuhihtao.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xbcapsqi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163drodytee.html

Py:   if not data: return
来源：http://www.xuanzx.com/163mkoireqk.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163byibvrky.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163qwnhabty.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163whhdukov.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163uksilawe.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163eqccpjgb.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163iocasaic.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163aofpkibm.html


<!-- 参考信息 -->