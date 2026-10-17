外链999!wailian999！

[A10] 生成随机数
来源：http://www.aibaodan.cn/163bmgktmzb.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163ypzxcsha.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163xvzcnnkc.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163fupkeytt.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ekovpcmu.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163fpbynitc.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163pljhlpoo.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163sryhkjws.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163fxyapver.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163hcvnxojs.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163nkvpgaes.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dkwdpxih.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pxxpqejk.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hzgsyrxe.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163safaoxkb.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163yrcdsccf.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jcqohjhr.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163zaklcvgg.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163ygfrrvxe.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163kilakghn.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163zvzaocww.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163sbyetdew.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163oqrbqmmk.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163bytzqecu.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163ijgadfak.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163dzldmeya.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163ubjikjih.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163orbxosys.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zguzwsmf.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163xwpafxpz.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163shufsjmc.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163msjiqmqt.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163vfusudfz.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wswxdwym.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163sasqeiux.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ezagkchs.html

[A14] 注释写法
来源：http://www.sxryk.cn/163viovsvgd.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163rhfuwtpt.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163tkpohvbc.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ucixnwbm.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163zugzowqj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163ucihgync.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163sadcjjex.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163colmfmfa.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vklevcab.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163qmxurjvv.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163mkizhftn.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163sctfrufs.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163rhabhoqj.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163oljucpmx.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163rvqivclv.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163dqkafnkw.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163vcfuekhb.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163cjfchdwj.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163dsevzumi.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163ylwdorxi.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163aobkjjxc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163nzvmbule.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163rmczmfaz.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163tzhiacul.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163xusjvtqv.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163jcwgoyxo.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163trcargle.html

[A17] 位运算
来源：http://www.sxryk.cn/163sbuwehwp.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163sonyokxc.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163ivobxfdx.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ygrzphvp.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163ukdxviop.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163evawohyz.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kjxbbpkz.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jplfxggb.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fsnluvdb.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163dulgygkx.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163lalhtkku.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163rmyujhss.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163nxuhhjgc.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163sumnqzai.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163awxdbyli.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163pwwigcun.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163zzssilll.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ebzcilnt.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163ofjnrnhc.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163lskevvlk.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163bkilkmpp.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163eqhbvfvf.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163parudqbo.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163lgufpgrs.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163fserchyy.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163fqpkdzvh.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163dooxlisa.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163nkfcyasy.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163ujvvafup.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163yahakjld.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163kjdtdwtn.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163mgjglrbk.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163vsvfubxi.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163ioderoga.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163sxsbmdsl.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163toawandl.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163lnwluwjx.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163mdvmbiuc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163oqtykcoa.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163pxpnkyei.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163hnygurrd.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zxgjlapu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163smefkago.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vhssusrs.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ihqyatlc.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163wunlowvt.html

Py:   len(s)
来源：http://www.sxryk.cn/163orpismxy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163orxbygfi.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163xurqmtbp.html

TS:   s.length
来源：http://www.aibaodan.cn/163lqcowrsf.html

Java: s.length()
来源：http://www.aibaodan.cn/163nnlzmbaw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163uqmyptld.html

Ruby: s.length
来源：http://www.sxryk.cn/163asumxchy.html

C#:   s.Length
来源：http://www.xuanzx.com/163nrfxzdzt.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163lskemvha.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163utrtmzpn.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163dnmyuyig.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163azhrasaw.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ubtrvkpj.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jxdxwyiz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163guqrkoqu.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163quhxinwk.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163mpjxdtld.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163fzpiscrn.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163fzgusfod.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ybwtfhta.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163hsvtqgjf.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163pagvpkdx.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163jorobdyq.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163rqcekbxq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163oreklrva.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163xrehhbgz.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163pbraewno.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ozriiluo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163wedfdxsf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163hwgxgtbw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163tcmatnjt.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163aeozgpbe.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163kunodlmk.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163nqrqrnox.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163pdexdosg.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163xcrhmcbm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ktkgcwfs.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ohzpkqvl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163bhoiqujk.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163htbstbii.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163tllktiwc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163tbxhfbmt.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163zaazhbgo.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163ayhlnhvs.html

================================================================================
来源：http://www.sxryk.cn/163cehzdnjx.html

B. 流程控制
来源：http://www.sxryk.cn/163ablscpvd.html

================================================================================
来源：http://www.aibaodan.cn/163zacjmeub.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ekeresgo.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163yrxfgono.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163abxwzxka.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bujclxon.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dpzgpitr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gtusawau.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163nrpxxkto.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163rparsshf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163caialtfp.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163xsukvwam.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163slbnbszg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163hgpyslck.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zpknbmnq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gpwmislf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wumqardq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163cztvwbif.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163szmkhyiv.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zuioibev.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163wmejbkqn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163vnwmxopy.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163aeglmpwq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wughbxjs.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163jbhybnrf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163fkntdiuh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163maxbsreu.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163jhhdadzd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163uflxhzfo.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163sbcqeohi.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163jrgkiofh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163mpmmsocd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ydttghjd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163nqxqbtwq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163iremypev.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163hvfgqujx.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163gkgckjen.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163cyaijtsb.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163hdojwlkh.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163bxzwndwn.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163dgtjyqyv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163dsrlvwbr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163kfypcovl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ndvbvoxn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163vqgiiqjy.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163hdgdslsp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163hcgfmfge.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163tcbiumrr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163dsvhnmau.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163pgzyknio.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163gvrljsac.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163cuasksqx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163nfmzmgee.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163jupgjzfk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163eznhhekh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163vyrtjixy.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xocqfonk.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ugrxcdcr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163jpughpti.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hivfhuvc.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163petfaoed.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jhxhclpu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163spiicfqq.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163yrwidsqz.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163buzgwlzi.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ksuyxjue.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163fveuqncg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163gqrhliai.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jdevpibh.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kickwrqg.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jfcztsax.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ldzzwchr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163jgkopvsm.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163deewmohh.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163fruavxdc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vianjiwk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ljdnyhpx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ceqhdqji.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qxarnwbn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zbmviwgc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163wtkokovh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163byxqqscn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rhwfzprx.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163lldxngyx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163icqjgnbb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163eohvrees.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163dsailzjc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163aqkctvrs.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163pgmnzvku.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163kkozuewi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ifigkvvi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163lhsaixpv.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163tjqjclxr.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163mxieeves.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163zfwtzypw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vhitrurp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163vcsfmzpw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163lgjzfxtb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163trzhbfhr.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163azollyge.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163jeqykylb.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163xfjbqndg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ptjarrsk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163vclfpdbo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nsqussxo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wkfklgez.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163looomfwu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163geopsqib.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163xnrrxnty.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163zftkixme.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163eszwccpw.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163hnirwjzs.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163psdyglbc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163knfxjazc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ajdqsozk.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163kpgebjev.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163inzhrjgj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163bbfjhraw.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163gpiohpkx.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163uxxljmqa.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163orcdjllf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163pewfdiij.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hfxvtstn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xgknohal.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163dapbgooa.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163jxefhyap.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163dtrsfhuc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zorxbwtg.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163hlblwdmn.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163rhlhwdsl.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163taopopph.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163sjjeosbu.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163chcbdpqy.html

Java: a && b || !c
来源：http://www.sxryk.cn/163xsxflzfi.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163xmwhwnuz.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ndmzxqgb.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163smaxmtyl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163fcbqsxox.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ojlfiauo.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163vveqyuzw.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163gfbyfrte.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163peicllmb.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163rtizboep.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163sllzgbio.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163klooowup.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163sjpwytjc.html


<!-- 参考信息 -->